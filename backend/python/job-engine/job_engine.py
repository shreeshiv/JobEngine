from typing import List, Dict
import re
import os 
import openai
class JobEngine:
    def __init__(self):
        # Initialize any required resources
        openai.api_key = os.environ.get('OPENAI_API_KEY')
        pass

    def get_vetted_list(self, job_details: Dict) -> List[Dict]:
        """
        Get a list of vetted candidates based on job requirements.
        
        Args:
            job_details (Dict): Job requirements and criteria
            
        Returns:
            List[Dict]: List of vetted candidates sorted by score
        """
        # Get candidates from database (implementation needed)
        candidates = self._get_candidates_from_db()
        
        # This can be just a simple database filtering
        filtered_candidates = self.hard_filter(candidates, job_details)
        
        # Apply soft filters and scoring
        scored_candidates = self.soft_filter(filtered_candidates, job_details)
        
        # Sort candidates by score in descending order
        vetted_list = sorted(scored_candidates, key=lambda x: x['score'], reverse=True)
        
        # Limit to required number of candidates
        return vetted_list[:job_details.get('total_candidates_required', len(vetted_list))]

    def hard_filter(self, candidates: List[Dict], job_details: Dict) -> List[Dict]:
        """
        Filter candidates based on non-negotiable criteria.
        
        Args:
            candidates (List[Dict]): List of candidates
            job_details (Dict): Job requirements
            
        Returns:
            List[Dict]: Filtered candidates meeting hard requirements
        """
        requirements = job_details.get('requirements', {})
        filtered_candidates = []

        for candidate in candidates:
            # Check work authorization and sponsorship
            if requirements.get('work_authorization') and not self._check_work_authorization(candidate, requirements):
                continue

            # Check work availability
            if not self._check_work_availability(candidate, requirements):
                continue

            # Check salary expectations
            if not self._check_salary(candidate, requirements):
                continue

            # Check location type
            if not self._check_location(candidate, requirements):
                continue

            filtered_candidates.append(candidate)

        return filtered_candidates

    def soft_filter(self, candidates: List[Dict], job_details: Dict) -> List[Dict]:
        """
        Score candidates based on matching criteria.
        
        Args:
            candidates (List[Dict]): Pre-filtered candidates
            job_details (Dict): Job requirements
            
        Returns:
            List[Dict]: Candidates with scoring
        """
        requirements = job_details.get('requirements', {})
        scored_candidates = []

        for candidate in candidates:
            score = 0
            max_score = 100

            # Skills matching (30% weight)
            skills_score = self._calculate_skills_score(candidate, requirements)
            score += skills_score * 0.3

            # Experience matching (30% weight)
            experience_score = self._calculate_experience_score(candidate, requirements)
            score += experience_score * 0.3

            # Education matching (20% weight)
            education_score = self._calculate_education_score(candidate, requirements)
            score += education_score * 0.2

            # Additional criteria (20% weight)
            additional_score = self._calculate_additional_score(candidate, requirements)
            score += additional_score * 0.2

            candidate['score'] = round(score, 2)
            scored_candidates.append(candidate)

        return scored_candidates

    def _check_work_authorization(self, candidate: Dict, requirements: Dict) -> bool:
        """Check if candidate meets work authorization requirements"""
        return True  # Implementation needed based on actual data structure

    def _check_work_availability(self, candidate: Dict, requirements: Dict) -> bool:
        """Check if candidate's availability matches job requirements"""
        required_availability = requirements.get('work_availability', [])
        candidate_availability = candidate.get('work_availability', [])
        return any(avail in candidate_availability for avail in required_availability)

    def _check_salary(self, candidate: Dict, requirements: Dict) -> bool:
        """Check if candidate's salary expectations are within range"""
        max_salary = requirements.get('max_annual_salary', float('inf'))
        candidate_salary = self._extract_salary(candidate.get('annual_salary_expectation', {}).get('full-time', '0'))
        return candidate_salary <= max_salary

    def _check_location(self, candidate: Dict, requirements: Dict) -> bool:
        """Check if candidate's location type matches requirements"""
        return True  # Implementation needed based on actual data structure

    def _calculate_skills_score(self, candidate: Dict, requirements: Dict) -> float:
        """Calculate score based on matching skills"""
        required_skills = set(requirements.get('skills', []))
        candidate_skills = set(candidate.get('skills', []))
        
        if not required_skills:
            return 100
            
        matching_skills = len(required_skills.intersection(candidate_skills))
        return (matching_skills / len(required_skills)) * 100

    def _calculate_experience_score(self, candidate: Dict, requirements: Dict) -> float:
        """Calculate score based on experience"""
        min_experience = requirements.get('min_experience', 0)
        candidate_experience = len(candidate.get('work_experiences', []))
        
        if candidate_experience >= min_experience:
            return 100
        return (candidate_experience / min_experience) * 100

    def _calculate_education_score(self, candidate: Dict, requirements: Dict) -> float:
        """Calculate score based on education requirements"""
        required_education = requirements.get('education', {})
        candidate_education = candidate.get('education', {})
        
        # Implementation needed based on specific education matching criteria
        return 100

    def _calculate_additional_score(self, candidate: Dict, requirements: Dict) -> float:
        """Calculate score based on additional criteria"""
        # Implementation needed based on additional matching criteria
        return 100

    def _extract_salary(self, salary_str: str) -> float:
        """Extract numerical salary value from string"""
        if not salary_str:
            return 0
        return float(re.sub(r'[^\d.]', '', salary_str))

    def _get_candidates_from_db(self) -> List[Dict]:
        """Get candidates from database"""
        # Implementation needed to fetch candidates from database
        return []



  def _llm_evaluate_candidate(self, candidate: Dict, job_details: Dict) -> float:
        """
        Use an LLM to refine candidate scoring based on job description and resume analysis.
        
        Args:
            candidate (Dict): Candidate data
            job_details (Dict): Job details
        
        Returns:
            float: Adjusted score based on LLM evaluation
        """
        prompt = f"""
        You are a hiring assistant. Given the following job description and candidate information, 
        evaluate how well the candidate fits the role on a scale from 0 to 100.

        Job Details:
        {job_details}

        Candidate Resume:
        {candidate}

        Provide a final score (0-100) based on skills, experience, education, and cultural fit.
        """
        
        response = openai.ChatCompletion.create(
            model="gpt-4-turbo",
            messages=[{"role": "system", "content": "You are an AI job evaluator."},
                      {"role": "user", "content": prompt}],
            temperature=0.7
        )

        # Extract numerical score
        score_str = response["choices"][0]["message"]["content"]
        try:
            return float(score_str.strip())
        except ValueError:
            return 0  # Default if parsing fails

    def soft_filter(self, candidates: List[Dict], job_details: Dict) -> List[Dict]:
        """
        Score candidates based on LLM analysis combined with traditional scoring.
        """
        scored_candidates = []

        for candidate in candidates:
            traditional_score = self._calculate_skills_score(candidate, job_details) * 0.3
            traditional_score += self._calculate_experience_score(candidate, job_details) * 0.3
            traditional_score += self._calculate_education_score(candidate, job_details) * 0.2
            traditional_score += self._calculate_additional_score(candidate, job_details) * 0.2

            # LLM Assisted Scoring
            llm_score = self._llm_evaluate_candidate(candidate, job_details)

            # Weighted combination of both scores
            final_score = (traditional_score * 0.6) + (llm_score * 0.4)

            candidate['score'] = round(final_score, 2)
            scored_candidates.append(candidate)

        return scored_candidates
## Job Engine Logic

### Core Flow

1. **Initial Candidate Retrieval**

   - Get candidates from database
   - Pass through filtering system

2. **Filtering Process**

   ```mermaid
   graph TD
       A[Candidates] --> B[Hard Filters]
       B --> C[Soft Filters]
       C --> D[Final Sorted List]
   ```

3. **Hard Filters** (Non-negotiable criteria)

   - Work Authorization
   - Work Availability
   - Salary Expectations
   - Location Requirements

4. **Soft Filters & Scoring**

   - Traditional Scoring (60% weight)

     - Skills Match (30%)
     - Experience Match (30%)
     - Education Match (20%)
     - Additional Criteria (20%)

   - LLM-Based Scoring (40% weight)
     - AI evaluation of candidate fit
     - Analysis of resume against job description

5. **Final Score Calculation**
   ```python
   final_score = (traditional_score * 0.6) + (llm_score * 0.4)
   ```

## Scoring Breakdown

### Traditional Score Components

- **Skills Score**

  ```python
  matching_skills = len(required_skills ∩ candidate_skills)
  skills_score = (matching_skills / total_required_skills) * 100
  ```

- **Experience Score**
  ```python
  if candidate_experience >= min_experience:
      score = 100
  else:
      score = (candidate_experience / min_experience) * 100
  ```

### LLM Score

- Uses GPT-4 to analyze:
  - Job requirements
  - Candidate resume
  - Cultural fit
  - Overall suitability

## Output

- Sorted list of candidates by final score
- Each candidate includes:
  - Original profile data
  - Calculated score
  - Can be limited to required number of candidates

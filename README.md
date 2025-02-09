# AI-Powered Platform for vetted job candidates

A platform that leverages AI to provide vetted job candidates, matching them with suitable job opportunities.

## Tech Stack

- NextJS
- TailwindCSS
- Python
- OpenAI
- MongoDB + PostgresSQL

## System Design

## Data models

## Job matching engine

## Project Structure

### Frontend (`/frontend`)

- Main frontend application implemented in NextJS
- For detailed setup and development instructions, please refer to the [Frontend README](/frontend/README.md)

### Backend (`/backend`)

The backend is structured into two main components:

- Python Backend (`/backend/python`)
  - Currently implements the main application logic
  - Job engine for candidate matching
  - API endpoints for job and candidate management
- Node Backend (`/backend/node`)
  - Reserved for future implementation

### Infrastructure (`/infra`)

Contains Infrastructure as Code (IaC) using Terraform:

- Cloud resource allocation scripts
- Environment configuration
- Deployment specifications
- For detailed setup instructions, see the [Infrastructure README](/infra/README.md)

### Database (`/database`)

Database-related resources:

- Migration scripts
- Schema definitions
- Database setup instructions
- Connection configurations

### Test (`/test`)

Testing resources:

- Sample candidate data
- Test database configurations
- Test cases and scenarios

## Environment Setup

1. Copy the `.env.example` file to create your own `.env` file:

   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your actual configuration values:
   - Database credentials
   - API configuration
   - External service API keys
   - Frontend configuration

Note: Never commit the `.env` file to version control. It contains sensitive information and should remain local to your development environment.

## Getting Started

1. Set up the frontend:

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

2. Set up the Python backend:

   ```bash
   cd backend/python
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   pip install -r requirements.txt
   python main.py
   ```

3. Set up the database:
   ```bash
   cd database
   # Follow database setup instructions in database/README.md
   ```

## Contributing

Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting any changes.

## License

[License information goes here]

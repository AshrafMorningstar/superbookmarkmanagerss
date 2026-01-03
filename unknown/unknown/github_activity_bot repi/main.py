/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import os
import time
import random
import logging
from datetime import datetime, timedelta
from dotenv import load_dotenv
from github import Github
from faker import Faker

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(message)s',
    handlers=[
        logging.FileHandler('bot.log'),
        logging.StreamHandler()
    ]
)

# Load environment variables
load_dotenv()
logging.info("Environment variables loaded")

class GithubBot:
    def __init__(self):
        self.github_token = os.getenv('GITHUB_TOKEN')
        self.repository_name = os.getenv('REPOSITORY_NAME')
        self.github = Github(self.github_token)
        self.faker = Faker()
        
        # Programming languages and their file extensions
        self.file_types = {
            'python': ['.py', '.pyw', '.pyx'],
            'javascript': ['.js', '.jsx', '.ts', '.tsx'],
            'html': ['.html', '.htm', '.css'],
            'java': ['.java', '.jsp'],
            'cpp': ['.cpp', '.hpp', '.cc'],
            'ruby': ['.rb', '.rake'],
            'php': ['.php', '.phtml'],
            'go': ['.go'],
            'rust': ['.rs'],
            'shell': ['.sh', '.bash'],
            'sql': ['.sql'],
            'markdown': ['.md', '.markdown']
        }
        
        # Common directory structures
        self.project_dirs = [
            'src/', 'test/', 'docs/', 'config/',
            'utils/', 'lib/', 'core/', 'api/',
            'models/', 'views/', 'controllers/',
            'scripts/', 'data/', 'assets/',
            'examples/', 'tools/', 'modules/'
        ]
    def connect_to_repo(self):
        try:
            if not self.github_token:
                print("Error: GitHub token is not set in .env file")
                return False
            if not self.repository_name:
                print("Error: Repository name is not set in .env file")
                return False
            
            print(f"Attempting to connect to repository: {self.repository_name}")
            self.repo = self.github.get_user().get_repo(self.repository_name)
            return True
        except Exception as e:
            print(f"Error connecting to repository: {e}")
            print("Please check:")
            print("1. Your GitHub token is valid")
            print("2. The repository name is correct and you have access to it")
            print("3. The repository exists in your GitHub account")
            return False

    def generate_code_content(self, file_ext):
        """Generate realistic code content based on file type"""
        if file_ext in ['.py']:
            return self.generate_python_code()
        elif file_ext in ['.js', '.ts']:
            return self.generate_javascript_code()
        elif file_ext in ['.html']:
            return self.generate_html_code()
        elif file_ext in ['.css']:
            return self.generate_css_code()
        elif file_ext in ['.java']:
            return self.generate_java_code()
        elif file_ext in ['.md']:
            return self.generate_markdown_content()
        else:
            return self.generate_generic_code()

    def generate_python_code(self):
        functions = random.randint(1, 3)
        code = [
            "import os",
            "import random",
            "from datetime import datetime",
            "",
            "class {}:".format(self.faker.domain_word().capitalize()),
            "    def __init__(self):",
            "        self.name = '{}'".format(self.faker.word()),
            "        self.created_at = datetime.now()",
            ""
        ]
        
        for _ in range(functions):
            code.extend([
                "    def {}(self, {}):".format(
                    self.faker.word(),
                    ", ".join([self.faker.word() for _ in range(random.randint(1, 3))])
                ),
                "        \"\"\"{}\"\"\"".format(self.faker.sentence()),
                "        return {}".format(random.choice(["True", "False", "None", "self.name", "self.created_at"])),
                ""
            ])
        return "\n".join(code)

    def generate_javascript_code(self):
        return f"""const {self.faker.word()} = require('{self.faker.word()}');

class {self.faker.domain_word().capitalize()} {{
    constructor() {{
        this.name = '{self.faker.word()}';
        this.data = {{}};
    }}

    async {self.faker.word()}() {{
        try {{
            const result = await fetch('{self.faker.url()}');
            return result.json();
        }} catch (error) {{
            console.error(error);
            return null;
        }}
    }}
}}

module.exports = {self.faker.domain_word().capitalize()};"""

    def generate_html_code(self):
        return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{self.faker.catch_phrase()}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>{self.faker.company()}</h1>
        <nav>
            <ul>
                <li><a href="#">{self.faker.word().capitalize()}</a></li>
                <li><a href="#">{self.faker.word().capitalize()}</a></li>
                <li><a href="#">{self.faker.word().capitalize()}</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <h2>{self.faker.catch_phrase()}</h2>
            <p>{self.faker.paragraph()}</p>
        </section>
    </main>
    <footer>
        <p>&copy; {datetime.now().year} {self.faker.company()}. All rights reserved.</p>
    </footer>
</body>
</html>"""

    def generate_css_code(self):
        colors = ['#' + ''.join([random.choice('0123456789ABCDEF') for _ in range(6)]) for _ in range(3)]
        return f"""/* Main styles */
:root {{
    --primary-color: {colors[0]};
    --secondary-color: {colors[1]};
    --accent-color: {colors[2]};
}}

body {{
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
}}

header {{
    background-color: var(--primary-color);
    color: white;
    padding: 1rem;
}}

nav ul {{
    list-style: none;
    display: flex;
    gap: 1rem;
}}

.container {{
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
}}"""

    def generate_java_code(self):
        return f"""package {self.faker.domain_word()};

import java.util.Date;
import java.util.List;
import java.util.ArrayList;

public class {self.faker.domain_word().capitalize()} {{
    private String name;
    private Date createdAt;
    private List<String> data;

    public {self.faker.domain_word().capitalize()}() {{
        this.name = "{self.faker.word()}";
        this.createdAt = new Date();
        this.data = new ArrayList<>();
    }}

    public String getName() {{
        return name;
    }}

    public void setName(String name) {{
        this.name = name;
    }}

    public Date getCreatedAt() {{
        return createdAt;
    }}
}}"""

    def generate_markdown_content(self):
        return f"""# {self.faker.catch_phrase()}

## Overview

{self.faker.paragraph()}

## Features

- {self.faker.sentence()}
- {self.faker.sentence()}
- {self.faker.sentence()}

## Installation

```bash
npm install {self.faker.word()}
```

## Usage

```javascript
const {self.faker.word()} = require('{self.faker.word()}');
```

## License

MIT License
"""

    def generate_generic_code(self):
        return "\n".join([self.faker.text() for _ in range(3)])

    def generate_commit_message(self):
        """Generate a realistic-looking commit message"""
        commit_types = ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']
        commit_scopes = ['core', 'ui', 'api', 'db', 'auth', 'tests', 'docs', 'deps']
        commit_type = random.choice(commit_types)
        commit_scope = random.choice(commit_scopes)
        
        messages = [
            f"Add new {self.faker.word()} functionality",
            f"Update {self.faker.word()} implementation",
            f"Fix bug in {self.faker.word()} module",
            f"Improve {self.faker.word()} performance",
            f"Refactor {self.faker.word()} class",
            f"Add tests for {self.faker.word()} component",
            f"Update documentation for {self.faker.word()}",
            f"Implement {self.faker.word()} feature"
        ]
        message = random.choice(messages)
        return f"{commit_type}({commit_scope}): {message}"

    def create_or_update_file(self, commit_date=None):
        """Create or update a file in the repository"""
        try:
            # Use provided date or current time
            current_time = commit_date if commit_date else datetime.now()
            
            # Select random project directory
            project_dir = random.choice(self.project_dirs)
            
            # Select random programming language and extension
            lang = random.choice(list(self.file_types.keys()))
            file_ext = random.choice(self.file_types[lang])
            
            # Generate filename based on faker words
            filename = f"{project_dir}{self.faker.word()}_{self.faker.word()}{file_ext}"
            
            # Generate content based on file type
            content = self.generate_code_content(file_ext)

            # Create or update the file
            commit_message = self.generate_commit_message()
            
            try:
                # Try to get the file first
                file = self.repo.get_contents(filename)
                self.repo.update_file(
                    filename,
                    commit_message,
                    content,
                    file.sha,
                    branch="main"
                )
            except:
                # File doesn't exist, create it
                self.repo.create_file(
                    filename,
                    commit_message,
                    content,
                    branch="main"
                )
            
            print(f"Successfully created/updated {filename}")
            return True
        except Exception as e:
            print(f"Error creating/updating file: {e}")
            return False

    def run_scheduled_task(self):
        """Run the scheduled task"""
        if self.connect_to_repo():
            self.create_or_update_file()

def test_commit():
    """Test function to make a single commit"""
    logging.info("\nStarting test commit...")
    logging.info("1. Initializing bot...")
    bot = GithubBot()
    logging.info(f"2. Attempting to connect to repository: {bot.repository_name}")
    if bot.connect_to_repo():
        logging.info("3. Successfully connected to repository")
        logging.info("4. Creating test commit...")
        if bot.create_or_update_file():
            logging.info("✓ Test commit completed successfully!")
        else:
            logging.error("× Failed to create test commit")
    else:
        logging.error("× Failed to connect to repository. Check your .env configuration.")

def generate_historical_commits():
    """Generate commits from January 2020 to today"""
    print("Starting historical commit generation...")
    bot = GithubBot()
    
    if not bot.connect_to_repo():
        print("Failed to connect to repository")
        return
    
    # Calculate date range
    start_date = datetime(2020, 1, 1)
    end_date = datetime.now()
    
    current_date = start_date
    while current_date <= end_date:
        # Skip weekends randomly (70% chance to commit on weekends)
        if current_date.weekday() >= 5 and random.random() > 0.7:
            current_date += timedelta(days=1)
            continue
            
        # Generate 1-5 commits for this day
        num_commits = random.randint(1, 5)
        
        for _ in range(num_commits):
            # Generate random time between 9 AM and 10 PM
            hour = random.randint(9, 22)
            minute = random.randint(0, 59)
            commit_datetime = current_date.replace(hour=hour, minute=minute)
            
            bot.create_or_update_file(commit_datetime)
            
            # Small delay to avoid API rate limits
            time.sleep(1)
        
        current_date += timedelta(days=1)
        print(f"Generated commits for {current_date.date()}")

def main():
    print("GitHub Activity Bot - Historical Commit Generator")
    print("==============================================")
    
    # Generate historical commits from 2020 to today
    generate_historical_commits()

if __name__ == "__main__":
    main()
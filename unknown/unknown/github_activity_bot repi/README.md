/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

# GitHub Activity Bot

A Python bot that automatically generates GitHub activity by creating and updating files in a specified repository. The bot creates commits with realistic-looking messages at scheduled intervals.

## Features

- Automatic file creation and updates
- Scheduled commits at configurable times
- Random, realistic commit messages using conventional commit format
- Environment variable configuration
- Error handling and logging

## Setup

1. Clone this repository
2. Install the required dependencies:

```bash
pip install -r requirements.txt
```

3. Create a `.env` file in the project root with the following variables:

```env
GITHUB_TOKEN=your_github_personal_access_token
REPOSITORY_NAME=your_repository_name
```

To get a GitHub personal access token:

1. Go to GitHub Settings > Developer Settings > Personal Access Tokens
2. Generate a new token with 'repo' permissions
3. Copy the token and add it to your `.env` file

## Usage

Run the bot:

```bash
python main.py
```

The bot will:

- Run at scheduled times (10:00, 14:00, 16:00, and 18:00 by default)
- Create or update files in an 'activity' folder in your repository
- Generate random commit messages following conventional commit format
- Handle errors gracefully

## Customization

You can modify the following in `main.py`:

- Scheduled times for commits
- Commit message formats
- File content generation
- Activity patterns

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License


---

## 📜 Copyright & License

© 2026 Ashraf Morningstar. All Rights Reserved.

**Educational Disclaimer:** This is a personal recreation of an existing project concept, developed for learning and skill development purposes. The original project concept remains the intellectual property of its respective creator(s).

**License:** MIT License - See [LICENSE](./LICENSE) file for details.

**Developer:** [Ashraf Morningstar](https://github.com/AshrafMorningstar)

**Portfolio:** Explore more projects at [github.com/AshrafMorningstar](https://github.com/AshrafMorningstar)

---

### 🤝 Connect & Contribute

Found this helpful? Give it a ⭐️ on GitHub!

- 💼 Company: MORNINGSTARCONSTRUCTION
- 📍 Location: India
- 🐦 Twitter: [@AMS_Morningstar](https://twitter.com/AMS_Morningstar)
- 📧 Email: ashrafmorningstar@gmail.com

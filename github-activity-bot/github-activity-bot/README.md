 nnnnnnnnnnnn# GitHub Activity Bot

A GitHub automation bot that creates repositories and generates project content while maintaining transparency and proper attribution.

## Features

- Create new GitHub repositories or work with existing ones
- Generate multiple project types (calculator, todo list, portfolio, etc.)
- Support for multiple programming languages and file types
- Configurable commit schedules
- Clear attribution and credit in all generated content
- Proper error handling and logging
- Environment-based configuration

## Important Notice

This bot creates legitimate, clearly labeled automated activity. It:

- Only creates current/future commits (no backdating)
- Can create current/future commits or, optionally, generate historical commits for testing/demonstration (must be used responsibly)
- Clearly marks all generated content as automated
- Includes proper attribution in all projects
- Uses conventional commit messages with automation notice
- Operates transparently without attempting to deceive

## Setup

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

4. Edit `.env` with your GitHub token and preferences

## Usage

Run the bot:

```bash
npm start
```

The bot will prompt you to:

1. Choose between single/multiple repository mode
2. Select project types to generate
3. Configure commit schedule
4. Start generating content

## Configuration

See `.env.example` for available configuration options:

- `GITHUB_TOKEN`: Your GitHub personal access token
- `COMMIT_SCHEDULE`: Daily commit schedule (cron format)
- `AUTHOR_NAME`: Your name for commit attribution
- `AUTHOR_EMAIL`: Your email for commit attribution

Additional configuration available in `.env.example`:

- `LOG_LEVEL`: winston log level (info, debug, error)
- `HISTORICAL_MAX_COMMITS`: safety cap when running historical generation

## Project Types

The bot can generate various project types including:

- Calculator applications
- Todo list applications
- Portfolio websites
- Shopping cart demos
- And more...

## Credits

Created by [Ashraf Morningstar](https://github.com/AshrafMorningstar)

## License

MIT License

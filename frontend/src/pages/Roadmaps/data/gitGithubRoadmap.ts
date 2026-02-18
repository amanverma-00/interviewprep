import type { Topic, RoadmapSection } from './frontendRoadmap';

export const GIT_GITHUB_TOPICS: Record<string, Topic> = {
    // ── Git Basics ──
    'what-is-git': {
        id: 'what-is-git',
        title: 'What is Git?',
        description: 'Git is a distributed version control system. Snapshots, not diffs. Local repositories, commits, and the object model (blobs, trees, commits).',
        resources: [
            { type: 'official', title: 'Git Documentation', url: 'https://git-scm.com/doc' },
            { type: 'course', title: 'Pro Git Book', url: 'https://git-scm.com/book/en/v2' },
            { type: 'video', title: 'Git Explained in 100 Seconds', url: 'https://www.youtube.com/watch?v=hwP7WQkmECE' },
        ],
    },
    'git-setup': {
        id: 'git-setup',
        title: 'Git Setup & Config',
        description: 'Installing Git, git config (user.name, user.email), SSH keys, GPG signing, .gitconfig, and editor configuration.',
        resources: [
            { type: 'official', title: 'Getting Started', url: 'https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup' },
        ],
    },
    'init-clone': {
        id: 'init-clone',
        title: 'init, clone, status',
        description: 'git init for new repos, git clone for existing ones, git status to see working directory state. The starting commands.',
        resources: [
            { type: 'official', title: 'Git Basics', url: 'https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository' },
        ],
    },

    // ── Staging & Committing ──
    'add-commit': {
        id: 'add-commit',
        title: 'add, commit, diff',
        description: 'git add (staging), git commit (snapshotting), git diff (see changes). Staging area concept, -m flag, amend commits, and .gitignore.',
        resources: [
            { type: 'official', title: 'Recording Changes', url: 'https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository' },
        ],
    },
    'commit-messages': {
        id: 'commit-messages',
        title: 'Commit Messages',
        description: 'Conventional commits, imperative mood, subject + body, semantic versioning tie-in, and tools like Commitizen.',
        resources: [
            { type: 'article', title: 'How to Write Good Commit Messages', url: 'https://cbea.ms/git-commit/' },
            { type: 'official', title: 'Conventional Commits', url: 'https://www.conventionalcommits.org/' },
        ],
    },

    // ── Branching ──
    'branching': {
        id: 'branching',
        title: 'Branching',
        description: 'git branch, git checkout/switch, creating, listing, deleting branches. Branches are lightweight pointers to commits.',
        resources: [
            { type: 'official', title: 'Branching', url: 'https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell' },
        ],
    },
    'merging': {
        id: 'merging',
        title: 'Merging',
        description: 'git merge (fast-forward, 3-way), merge conflicts, resolving conflicts, merge strategies, and --no-ff for explicit merge commits.',
        resources: [
            { type: 'official', title: 'Merging', url: 'https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging' },
        ],
    },
    'rebasing': {
        id: 'rebasing',
        title: 'Rebasing',
        description: 'git rebase for linear history. Interactive rebase (squash, fixup, reorder), rebase vs merge, and the golden rule of rebasing.',
        resources: [
            { type: 'official', title: 'Rebasing', url: 'https://git-scm.com/book/en/v2/Git-Branching-Rebasing' },
        ],
    },

    // ── Remote ──
    'remote': {
        id: 'remote',
        title: 'Remote Repositories',
        description: 'git remote, push, pull, fetch. Origin, upstream, tracking branches, and working with multiple remotes.',
        resources: [
            { type: 'official', title: 'Working with Remotes', url: 'https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes' },
        ],
    },

    // ── History ──
    'log-history': {
        id: 'log-history',
        title: 'Git Log & History',
        description: 'git log (--oneline, --graph, --all), git show, git blame, git bisect for finding bugs, and reflog for recovery.',
        resources: [
            { type: 'official', title: 'Viewing History', url: 'https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History' },
        ],
    },

    // ── Undoing ──
    'undoing': {
        id: 'undoing',
        title: 'Undoing Changes',
        description: 'git reset (soft/mixed/hard), git revert (safe undo), git checkout -- file, git restore, git stash, and recovering with reflog.',
        resources: [
            { type: 'official', title: 'Undoing Things', url: 'https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things' },
        ],
    },
    'stashing': {
        id: 'stashing',
        title: 'Stashing',
        description: 'git stash for temporarily shelving changes. stash pop, stash list, stash apply, stash drop, and named stashes.',
        resources: [
            { type: 'official', title: 'Stashing', url: 'https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning' },
        ],
    },

    // ── Advanced ──
    'cherry-pick': {
        id: 'cherry-pick',
        title: 'Cherry-pick & Tags',
        description: 'git cherry-pick to apply specific commits. git tag for release markers (lightweight vs annotated). Semantic versioning with tags.',
        resources: [
            { type: 'official', title: 'Tagging', url: 'https://git-scm.com/book/en/v2/Git-Basics-Tagging' },
        ],
    },
    'workflows': {
        id: 'workflows',
        title: 'Git Workflows',
        description: 'Git Flow, GitHub Flow, trunk-based development. Branch naming conventions, release branches, and hotfix strategies.',
        resources: [
            { type: 'article', title: 'Git Workflows', url: 'https://www.atlassian.com/git/tutorials/comparing-workflows' },
        ],
    },

    // ── GitHub ──
    'github-basics': {
        id: 'github-basics',
        title: 'GitHub Basics',
        description: 'Repositories, README, Issues, Stars, Forks, and the GitHub profile. The world\'s largest code hosting platform.',
        resources: [
            { type: 'official', title: 'GitHub Docs', url: 'https://docs.github.com/en' },
        ],
    },
    'pull-requests': {
        id: 'pull-requests',
        title: 'Pull Requests',
        description: 'Creating PRs, code review, requesting reviews, draft PRs, PR templates, merge options (merge, squash, rebase), and status checks.',
        resources: [
            { type: 'official', title: 'Pull Requests', url: 'https://docs.github.com/en/pull-requests' },
        ],
    },
    'github-actions': {
        id: 'github-actions',
        title: 'GitHub Actions',
        description: 'CI/CD built into GitHub. Workflows, jobs, steps, triggers, matrix builds, secrets, artifacts, and the marketplace.',
        resources: [
            { type: 'official', title: 'GitHub Actions', url: 'https://docs.github.com/en/actions' },
            { type: 'video', title: 'GitHub Actions Tutorial', url: 'https://www.youtube.com/watch?v=R8_veQiYBjI' },
        ],
    },
    'github-pages': {
        id: 'github-pages',
        title: 'GitHub Pages',
        description: 'Free static site hosting from GitHub repos. Custom domains, Jekyll integration, and deploying SPAs.',
        resources: [
            { type: 'official', title: 'GitHub Pages', url: 'https://docs.github.com/en/pages' },
        ],
    },
    'open-source': {
        id: 'open-source',
        title: 'Open Source Contributing',
        description: 'Forking, contributing guidelines, issue templates, code of conduct, licensing (MIT, Apache, GPL), and making your first PR.',
        resources: [
            { type: 'article', title: 'How to Contribute', url: 'https://opensource.guide/how-to-contribute/' },
        ],
    },
};

export const GIT_GITHUB_SECTIONS: RoadmapSection[] = [
    {
        id: 'basics',
        title: 'Git Basics',
        leftTopics: [
            { id: 'what-is-git', title: 'What is Git?' },
            { id: 'git-setup', title: 'Setup & Config' },
        ],
        rightTopics: [{ id: 'init-clone', title: 'init / clone / status' }],
    },
    {
        id: 'staging',
        title: 'Staging & Committing',
        leftTopics: [{ id: 'add-commit', title: 'add / commit / diff' }],
        rightTopics: [{ id: 'commit-messages', title: 'Commit Messages' }],
    },
    {
        id: 'branching-section',
        title: 'Branching & Merging',
        description: 'The core of Git',
        leftTopics: [
            { id: 'branching', title: 'Branching' },
            { id: 'merging', title: 'Merging' },
        ],
        rightTopics: [{ id: 'rebasing', title: 'Rebasing' }],
    },
    {
        id: 'remote-section',
        title: 'Remote Repositories',
        rightTopics: [{ id: 'remote', title: 'push / pull / fetch' }],
    },
    {
        id: 'history',
        title: 'History & Undoing',
        leftTopics: [
            { id: 'log-history', title: 'Log & History' },
            { id: 'undoing', title: 'Undoing Changes' },
        ],
        rightTopics: [{ id: 'stashing', title: 'Stashing' }],
    },
    {
        id: 'advanced-git',
        title: 'Advanced Git',
        leftTopics: [{ id: 'cherry-pick', title: 'Cherry-pick & Tags' }],
        rightTopics: [{ id: 'workflows', title: 'Git Workflows' }],
    },
    {
        id: 'github',
        title: 'GitHub',
        leftTopics: [
            { id: 'github-basics', title: 'GitHub Basics' },
            { id: 'pull-requests', title: 'Pull Requests' },
        ],
        rightTopics: [
            { id: 'github-actions', title: 'GitHub Actions' },
            { id: 'github-pages', title: 'GitHub Pages' },
        ],
    },
    {
        id: 'oss',
        title: 'Open Source',
        rightTopics: [{ id: 'open-source', title: 'Contributing to Open Source' }],
    },
];

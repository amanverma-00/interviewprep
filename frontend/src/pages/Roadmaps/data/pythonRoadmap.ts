import type { Topic, RoadmapSection } from './frontendRoadmap';

export const PYTHON_TOPICS: Record<string, Topic> = {
    // ── Basics ──
    'python-basics': {
        id: 'python-basics',
        title: 'Python Basics',
        description: 'Variables, data types, operators, type casting, and the Python REPL. Python\'s philosophy: readability counts (PEP 20).',
        resources: [
            { type: 'official', title: 'Python Tutorial', url: 'https://docs.python.org/3/tutorial/' },
            { type: 'video', title: 'Python Full Course', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' },
            { type: 'course', title: 'Automate the Boring Stuff', url: 'https://automatetheboringstuff.com/' },
        ],
    },
    'control-flow-py': {
        id: 'control-flow-py',
        title: 'Control Flow',
        description: 'if/elif/else, for loops, while loops, break/continue, match-case (3.10+), list/dict/set comprehensions, and walrus operator (:=).',
        resources: [
            { type: 'official', title: 'Control Flow (Python Docs)', url: 'https://docs.python.org/3/tutorial/controlflow.html' },
        ],
    },
    'functions-py': {
        id: 'functions-py',
        title: 'Functions',
        description: 'def, return, *args, **kwargs, default parameters, lambda functions, decorators, and closures. First-class functions.',
        resources: [
            { type: 'official', title: 'Functions', url: 'https://docs.python.org/3/tutorial/controlflow.html#defining-functions' },
        ],
    },

    // ── Data Structures ──
    'lists-tuples': {
        id: 'lists-tuples',
        title: 'Lists & Tuples',
        description: 'Lists (mutable, ordered), tuples (immutable). slicing, list comprehensions, unpacking, sorting, and common operations.',
        resources: [
            { type: 'official', title: 'Data Structures', url: 'https://docs.python.org/3/tutorial/datastructures.html' },
        ],
    },
    'dicts-sets': {
        id: 'dicts-sets',
        title: 'Dictionaries & Sets',
        description: 'dict for key-value pairs, set for unique elements. Dict comprehensions, defaultdict, Counter, OrderedDict, and set operations.',
        resources: [
            { type: 'official', title: 'Dictionaries', url: 'https://docs.python.org/3/tutorial/datastructures.html#dictionaries' },
        ],
    },
    'strings-py': {
        id: 'strings-py',
        title: 'Strings',
        description: 'f-strings, string methods, slicing, regular expressions (re module), string formatting, and encoding/decoding.',
        resources: [
            { type: 'official', title: 'String Methods', url: 'https://docs.python.org/3/library/stdtypes.html#string-methods' },
        ],
    },

    // ── OOP ──
    'oop-py': {
        id: 'oop-py',
        title: 'OOP in Python',
        description: 'Classes, __init__, self, inheritance, multiple inheritance, MRO, @property, @classmethod, @staticmethod, and dunder methods.',
        resources: [
            { type: 'official', title: 'Classes', url: 'https://docs.python.org/3/tutorial/classes.html' },
        ],
    },
    'dataclasses': {
        id: 'dataclasses',
        title: 'Dataclasses & Pydantic',
        description: '@dataclass for simple data holders. Pydantic for data validation. attrs for advanced use cases. Frozen dataclasses for immutability.',
        resources: [
            { type: 'official', title: 'Dataclasses', url: 'https://docs.python.org/3/library/dataclasses.html' },
            { type: 'official', title: 'Pydantic', url: 'https://docs.pydantic.dev/' },
        ],
    },

    // ── Modules ──
    'modules-py': {
        id: 'modules-py',
        title: 'Modules & Packages',
        description: 'import system, __init__.py, relative imports, pip, virtual environments (venv), and package structure.',
        resources: [
            { type: 'official', title: 'Modules', url: 'https://docs.python.org/3/tutorial/modules.html' },
        ],
    },

    // ── Error Handling ──
    'exceptions': {
        id: 'exceptions',
        title: 'Error Handling',
        description: 'try/except/finally/else, custom exceptions, exception chaining, context managers (with statement), and EAFP vs LBYL.',
        resources: [
            { type: 'official', title: 'Errors and Exceptions', url: 'https://docs.python.org/3/tutorial/errors.html' },
        ],
    },

    // ── Advanced ──
    'iterators-generators': {
        id: 'iterators-generators',
        title: 'Iterators & Generators',
        description: 'Iterator protocol (__iter__, __next__), generators (yield), generator expressions, and itertools module.',
        resources: [
            { type: 'official', title: 'Iterators', url: 'https://docs.python.org/3/tutorial/classes.html#iterators' },
        ],
    },
    'decorators': {
        id: 'decorators',
        title: 'Decorators',
        description: 'Function decorators, class decorators, @wraps, decorator factories, and common patterns (logging, timing, caching).',
        resources: [
            { type: 'article', title: 'Decorators Guide', url: 'https://realpython.com/primer-on-python-decorators/' },
        ],
    },
    'async-py': {
        id: 'async-py',
        title: 'Async Python',
        description: 'asyncio, async/await, event loop, aiohttp, tasks, gather, and when to use async vs threading vs multiprocessing.',
        resources: [
            { type: 'official', title: 'asyncio', url: 'https://docs.python.org/3/library/asyncio.html' },
        ],
    },
    'type-hints': {
        id: 'type-hints',
        title: 'Type Hints',
        description: 'PEP 484 type annotations, typing module, mypy for static type checking, and runtime type validation with Pydantic.',
        resources: [
            { type: 'official', title: 'Type Hints (PEP 484)', url: 'https://docs.python.org/3/library/typing.html' },
        ],
    },

    // ── Testing ──
    'testing-py': {
        id: 'testing-py',
        title: 'Testing',
        description: 'pytest (the standard), unittest, fixtures, parametrize, mocking (unittest.mock), and test coverage.',
        resources: [
            { type: 'official', title: 'pytest', url: 'https://docs.pytest.org/' },
        ],
    },

    // ── Web ──
    'fastapi': {
        id: 'fastapi',
        title: 'FastAPI',
        description: 'Modern, high-performance web framework. Automatic API docs, Pydantic validation, dependency injection, and async support.',
        resources: [
            { type: 'official', title: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
        ],
    },
    'django': {
        id: 'django',
        title: 'Django',
        description: 'The batteries-included web framework. ORM, admin panel, authentication, middleware, templates, and Django REST Framework.',
        resources: [
            { type: 'official', title: 'Django Documentation', url: 'https://docs.djangoproject.com/' },
        ],
    },
    'flask': {
        id: 'flask',
        title: 'Flask',
        description: 'Lightweight micro-framework. Routing, templates (Jinja2), blueprints, extensions, and building REST APIs.',
        resources: [
            { type: 'official', title: 'Flask Documentation', url: 'https://flask.palletsprojects.com/' },
        ],
    },

    // ── Data ──
    'numpy-pandas': {
        id: 'numpy-pandas',
        title: 'NumPy & Pandas',
        description: 'NumPy for numerical computing (arrays, vectorization). Pandas for data manipulation (DataFrames, Series, groupby, merge).',
        resources: [
            { type: 'official', title: 'NumPy', url: 'https://numpy.org/doc/' },
            { type: 'official', title: 'Pandas', url: 'https://pandas.pydata.org/docs/' },
        ],
    },

    // ── Package Management ──
    'venv-pip': {
        id: 'venv-pip',
        title: 'Virtual Environments & pip',
        description: 'venv for isolated environments, pip for package management, requirements.txt, Poetry, and uv (the fast new manager).',
        resources: [
            { type: 'official', title: 'venv', url: 'https://docs.python.org/3/library/venv.html' },
            { type: 'official', title: 'Poetry', url: 'https://python-poetry.org/' },
        ],
    },
};

export const PYTHON_SECTIONS: RoadmapSection[] = [
    {
        id: 'basics',
        title: 'Basics',
        leftTopics: [
            { id: 'python-basics', title: 'Python Basics' },
            { id: 'control-flow-py', title: 'Control Flow' },
        ],
        rightTopics: [{ id: 'functions-py', title: 'Functions' }],
    },
    {
        id: 'data-structures',
        title: 'Data Structures',
        leftTopics: [
            { id: 'lists-tuples', title: 'Lists & Tuples' },
            { id: 'dicts-sets', title: 'Dicts & Sets' },
        ],
        rightTopics: [{ id: 'strings-py', title: 'Strings' }],
    },
    {
        id: 'oop',
        title: 'Object-Oriented Python',
        leftTopics: [{ id: 'oop-py', title: 'OOP' }],
        rightTopics: [{ id: 'dataclasses', title: 'Dataclasses & Pydantic' }],
    },
    {
        id: 'modules',
        title: 'Modules & Packages',
        leftTopics: [{ id: 'modules-py', title: 'Modules & Packages' }],
        rightTopics: [{ id: 'venv-pip', title: 'venv & pip' }],
    },
    {
        id: 'errors',
        title: 'Error Handling',
        rightTopics: [{ id: 'exceptions', title: 'Exceptions' }],
    },
    {
        id: 'advanced',
        title: 'Advanced Python',
        leftTopics: [
            { id: 'iterators-generators', title: 'Iterators & Generators' },
            { id: 'decorators', title: 'Decorators' },
        ],
        rightTopics: [
            { id: 'async-py', title: 'Async Python' },
            { id: 'type-hints', title: 'Type Hints' },
        ],
    },
    {
        id: 'testing',
        title: 'Testing',
        rightTopics: [{ id: 'testing-py', title: 'pytest' }],
    },
    {
        id: 'web',
        title: 'Web Frameworks',
        leftTopics: [
            { id: 'fastapi', title: 'FastAPI' },
            { id: 'django', title: 'Django' },
        ],
        rightTopics: [{ id: 'flask', title: 'Flask' }],
    },
    {
        id: 'data',
        title: 'Data Science',
        rightTopics: [{ id: 'numpy-pandas', title: 'NumPy & Pandas' }],
    },
];

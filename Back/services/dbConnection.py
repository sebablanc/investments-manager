import os
from sqlmodel import create_engine, Session

class DBConnection:
    def __init__(self):
        # 1. Read configuration from environment variables
        DB_USER = os.getenv("DB_USER", "seba")
        DB_PASS = os.getenv("DB_PASS", "investments")
        DB_HOST = os.getenv("DB_HOST", "localhost")  # Default to localhost if not set
        DB_PORT = os.getenv("DB_PORT", "3306")
        DB_NAME = os.getenv("DB_NAME", "investments")
        
        # 2. Construct the connection string using the environment variable
        connection_url = f"mysql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

        try:
            engine = create_engine(connection_url)
            factory = Session(engine)
            self.session = factory
        except Exception as e:
            # Handle connection error gracefully instead of crashing the app
            print(f"ERROR: Could not connect to database at {DB_HOST}:{DB_PORT}")
            print(f"Details: {e}")
            self.session = None # Ensure session is None on failure

    def get_session(self):
        return self.session

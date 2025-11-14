from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker

#Database details
SERVER = r"SADEESHANA2004\SQLEXPRESS"
DATABASE = "Utility_Management_System"
USERNAME = "Sadeeshana"
PASSWORD = "sadeeputha"

#connection string
SQLALCHEMY_DATABASE_URL = f"mssql+pyodbc://{USERNAME}:{PASSWORD}@{SERVER}/{DATABASE}?driver=ODBC+Driver+17+for+SQL+Server"


#Engine and session
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


try:
    # Test connection
    with engine.connect() as connection:
        result = connection.execute(text("SELECT 1"))
        print("Database connected successfully!", result.fetchone())
except Exception as e:
    print("Failed to connect to database:", e)
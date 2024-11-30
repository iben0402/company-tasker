CREATE DATABASE IF NOT EXISTS tasker;
USE tasker;

-- ROLE
CREATE TABLE IF NOT EXISTS roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

-- TEAM
CREATE TABLE IF NOT EXISTS teams (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    owner_id INT NOT NULL
);

-- USER
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_id INT NOT NULL,
    team_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (team_id) REFERENCES teams(id)
);

ALTER TABLE teams ADD FOREIGN KEY (owner_id) REFERENCES users(id);

-- PROJECT
CREATE TABLE IF NOT EXISTS projects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

-- PROJECT_TEAM (MANY TO MANY)
CREATE TABLE IF NOT EXISTS project_team (
    project_id INT,
    team_id INT,
    FOREIGN KEY (project_id) REFERENCES projects(id),
    FOREIGN KEY (team_id) REFERENCES teams(id)
);

-- TASK
CREATE TABLE IF NOT EXISTS tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    project_id INT,
    deadline DATE,
    create_date DATE,
    finish_date DATE,
    assignee_id INT,
    status VARCHAR(255),
    FOREIGN KEY (project_id) REFERENCES projects(id),
    FOREIGN KEY (assignee_id) REFERENCES users(id)
);

-- COMMENT
CREATE TABLE IF NOT EXISTS comments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    content TEXT,
    task_id INT,
    user_id INT,
    create_date DATE,
    FOREIGN KEY (task_id) REFERENCES tasks(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- ATTACHMENT
CREATE TABLE IF NOT EXISTS attachments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    path VARCHAR(255) NOT NULL,
    task_id INT,
    user_id INT,
    create_date DATE,
    FOREIGN KEY (task_id) REFERENCES tasks(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- INITIAL DATA
INSERT INTO roles (name) VALUES ('admin');

INSERT INTO users (username, password, role_id) VALUES ('admin', 'aDmin645!', 1);

INSERT INTO teams (name, description, owner_id) VALUES ('administration', 'Management team', 1);
UPDATE users SET team_id = 1 WHERE id = 1;

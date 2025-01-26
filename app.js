<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Manager</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f9; }
        .container { width: 80%; margin: 0 auto; padding-top: 50px; }
        header { text-align: center; margin-bottom: 30px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 10px; text-align: left; border: 1px solid #ddd; }
        th { background-color: #4CAF50; color: white; }
        tr:hover { background-color: #f1f1f1; }
        input[type="text"], input[type="password"], input[type="submit"] { padding: 8px; margin: 5px 0; width: 100%; }
        .form-container { background-color: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }
        .add-form { margin-bottom: 20px; }
        .add-form input[type="submit"] { width: 100px; }
        .delete-btn { color: red; cursor: pointer; }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>Password Manager</h1>
    </header>

    <div class="form-container">
        <h2>Add a new password</h2>
        <form class="add-form" action="/add" method="POST">
            <input type="text" name="site" placeholder="Website" required>
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <input type="submit" value="Add Password">
        </form>
    </div>

    <h2>Saved Passwords</h2>
    <table>
        <thead>
            <tr>
                <th>Website</th>
                <th>Username</th>
                <th>Password</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {% for password in passwords %}
            <tr>
                <td>{{ password[1] }}</td>
                <td>{{ password[2] }}</td>
                <td>{{ password[3] }}</td>
                <td><a href="/delete/{{ password[0] }}" class="delete-btn">Delete</a></td>
            </tr>
            {% endfor %}
        </tbody>
    </table>
</div>

</body>
</html>

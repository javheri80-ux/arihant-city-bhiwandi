<?php
/**
 * Lead Viewer for Arihant City Kalyan Bhiwandi
 * Protected by password "Baba@369369"
 */

session_start();

$password = "Baba@369369";

// Handle Logout
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: baba-leads.php");
    exit();
}

// Handle Login
if (isset($_POST['pass'])) {
    if ($_POST['pass'] === $password) {
        $_SESSION['logged_in'] = true;
    } else {
        $error = "Incorrect Password!";
    }
}

// Handle Clear Leads
if (isset($_POST['clear']) && isset($_SESSION['logged_in'])) {
    file_put_contents('gotya.txt', "Name,Phone,Email,Config,Date\n");
    header("Location: baba-leads.php");
    exit();
}

$is_logged_in = isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true;

$isVercel = getenv('VERCEL') || isset($_ENV['VERCEL']);
$vercel_msg = "";
if ($isVercel) {
    $vercel_msg = "⚠️ <strong>Vercel Detected:</strong> Leads saved locally are NOT persistent on Vercel. Please ensure Google Sheets is setup to capture leads permanently.";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arihant City | Lead Panel</title>
    <style>
        :root {
            --primary: #0a4d2e;
            --accent: #c4a75e;
            --bg: #0f172a;
            --card: #1e293b;
            --text: #f8fafc;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg);
            color: var(--text);
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .login-box {
            background: var(--card);
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            width: 100%;
            max-width: 400px;
            text-align: center;
            margin-top: 100px;
        }

        .login-box h2 { color: var(--accent); margin-bottom: 20px; }
        
        input[type="password"] {
            width: 100%;
            padding: 12px;
            margin-bottom: 20px;
            border: 1px solid #334155;
            background: #0f172a;
            color: white;
            border-radius: 6px;
            box-sizing: border-box;
        }

        .btn {
            background-color: var(--primary);
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
            width: 100%;
            transition: 0.3s;
        }

        .btn:hover { background-color: #0d6d42; }

        .leads-container {
            width: 100%;
            max-width: 1200px;
            background: var(--card);
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            margin-top: 20px;
        }

        .header-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            flex-wrap: wrap;
            gap: 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background: #0f172a;
            border-radius: 8px;
            overflow: hidden;
        }

        th {
            background: var(--primary);
            color: white;
            text-align: left;
            padding: 15px;
            font-size: 0.9rem;
        }

        td {
            padding: 12px 15px;
            border-bottom: 1px solid #1e293b;
            font-size: 0.9rem;
        }

        tr:hover { background: #1e293b; }

        .logout-btn {
            background: #ef4444;
            color: white;
            text-decoration: none;
            padding: 8px 15px;
            border-radius: 4px;
            font-size: 0.8rem;
        }

        .clear-btn {
            background: #64748b;
            color: white;
            padding: 8px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.8rem;
        }

        .error { color: #ef4444; margin-bottom: 10px; font-size: 0.9rem; }

        @media (max-width: 768px) {
            .leads-container { padding: 10px; overflow-x: auto; }
            td, th { padding: 10px 8px; font-size: 0.8rem; }
        }
    </style>
</head>
<body>

    <?php if (!$is_logged_in): ?>
        <div class="login-box">
            <h2>Lead Access Panel</h2>
            <?php if (isset($error)) echo "<p class='error'>$error</p>"; ?>
            <form method="POST">
                <input type="password" name="pass" placeholder="Enter Password" required autofocus>
                <button type="submit" class="btn">Login</button>
            </form>
        </div>
    <?php else: ?>
        <div class="leads-container">
            <div class="header-actions">
                <h2 style="color: var(--accent); margin: 0;">Website Leads</h2>
                <?php if ($vercel_msg) echo "<p style='color: #fbbf24; background: rgba(251, 191, 36, 0.1); padding: 10px; border-radius: 6px; width: 100%;'>$vercel_msg</p>"; ?>
                <div style="display: flex; gap: 10px;">
                    <form method="POST" onsubmit="return confirm('Are you sure you want to delete ALL leads?');">
                        <button type="submit" name="clear" class="clear-btn">Clear All</button>
                    </form>
                    <a href="?logout=1" class="logout-btn">Logout</a>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Config</th>
                        <th>Date & Time</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    if (file_exists('gotya.txt')) {
                        $lines = file('gotya.txt');
                        // Skip header
                        for ($i = 1; $i < count($lines); $i++) {
                            $data = str_getcsv($lines[$i]);
                            if (count($data) >= 2) {
                                echo "<tr>";
                                foreach ($data as $cell) {
                                    echo "<td>" . htmlspecialchars($cell) . "</td>";
                                }
                                echo "</tr>";
                            }
                        }
                    }
                    ?>
                </tbody>
            </table>
            
            <?php if (!file_exists('gotya.txt') || count(file('gotya.txt')) <= 1): ?>
                <p style="text-align: center; padding: 40px; color: #64748b;">No leads found yet.</p>
            <?php endif; ?>
        </div>
    <?php endif; ?>

</body>
</html>

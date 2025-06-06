< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title> TRIPUP</title>
                    <style>
        /* Base Styles */
                        * {
                            box - sizing: border-box;
                        margin: 0;
                        padding: 0;
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

                        body {
                            background - color: #f5f5f5;
                        color: #333;
        }

                        /* Login Page Styles */
                        .login-container {
                            display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                        background: linear-gradient(135deg, #6e8efb, #a777e3);
                        padding: 20px;
        }

                        .login-box {
                            background: white;
                        padding: 40px;
                        border-radius: 10px;
                        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
                        width: 100%;
                        max-width: 400px;
                        text-align: center;
        }

                        .login-box h1 {
                            margin - bottom: 30px;
                        color: #333;
                        font-size: 24px;
        }

                        .input-group {
                            position: relative;
                        margin-bottom: 20px;
                        display: flex;
                        align-items: center;
        }

                        .input-group i {
                            position: absolute;
                        left: 15px;
                        color: #777;
        }

                        .input-group input {
                            width: 100%;
                        padding: 15px 15px 15px 45px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        font-size: 16px;
        }

                        .login-btn {
                            width: 100%;
                        padding: 15px;
                        background: #6e8efb;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        font-size: 16px;
                        cursor: pointer;
                        transition: background 0.3s;
        }

                        .login-btn:hover {
                            background: #5a7df4;
        }

                        .login-options {
                            display: flex;
                        justify-content: space-between;
                        margin: 20px 0;
                        font-size: 14px;
        }

                        .login-options a {
                            color: #6e8efb;
                        text-decoration: none;
        }

                        .login-options a:hover {
                            text - decoration: underline;
        }

                        /* App Container Styles */
                        .app-container {
                            max - width: 500px;
                        margin: 0 auto;
                        background-color: white;
                        min-height: 100vh;
                        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                        position: relative;
                        overflow-x: hidden;
                        display: none;
        }

                        header {
                            display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 20px;
                        background-color: #6e8efb;
                        color: white;
        }

                        header h1 {
                            font - size: 20px;
                        font-weight: 600;
        }

                        .user-profile {
                            font - size: 24px;
                        cursor: pointer;
                        transition: transform 0.2s;
        }

                        .user-profile:hover {
                            transform: scale(1.1);
        }

                        .wallet-balance {
                            padding: 20px;
                        background-color: #f8f9fa;
                        text-align: center;
        }

                        .balance-display {
                            margin - bottom: 15px;
        }

                        .amount {
                            font - size: 36px;
                        font-weight: 700;
        }

                        .currency {
                            font - size: 18px;
                        color: #666;
                        margin-left: 5px;
        }

                        .balance-actions {
                            display: flex;
                        justify-content: center;
                        gap: 15px;
                        margin-top: 15px;
        }

                        /* Offline Indicator */
                        .offline-indicator {
                            position: fixed;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background-color: #f44336;
                        color: white;
                        text-align: center;
                        padding: 10px;
                        transform: translateY(100%);
                        transition: transform 0.3s;
                        z-index: 1000;
        }

                        .offline-indicator.show {
                            transform: translateY(0);
        }

                        /* Toast Notification */
                        .toast {
                            position: fixed;
                        bottom: 20px;
                        left: 50%;
                        transform: translateX(-50%) translateY(100px);
                        background-color: #333;
                        color: white;
                        padding: 12px 24px;
                        border-radius: 4px;
                        z-index: 1000;
                        transition: transform 0.3s ease;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

                        .toast.show {
                            transform: translateX(-50%) translateY(0);
        }
                    </style>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
                    </head>
                    <body>
                        <!-- Login Page -->
                        <div id="login-page" class="login-container">
                            <div class="login-box">
                                <h1>Welcome to Travel Wallet all in one app</h1>
                                <form id="login-form">
                                    <div class="input-group">
                                        <i class="fas fa-envelope"></i>
                                        <input type="email" id="login-email" placeholder="Email" required>
                                    </div>
                                    <div class="input-group">
                                        <i class="fas fa-lock"></i>
                                        <input type="password" id="login-password" placeholder="Password" required>
                                    </div>
                                    <button type="submit" class="login-btn">Log In</button>
                                    <div class="login-options">
                                        <a href="#" id="forgot-password">Forgot password?</a>
                                        <a href="#" id="sign-up">Sign up</a>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <!-- Main App -->
                        <div id="app-container" class="app-container">
                            <header>
                                <h1>Travel Wallet</h1>
                                <div class="user-profile">
                                    <i class="fas fa-user-circle" id="logout-btn"></i>
                                </div>
                            </header>
                            <div class="wallet-balance">
                                <div class="balance-display">
                                    <span class="amount">1,250.75</span>
                                    <span class="currency">USD</span>
                                </div>
                                <div class="balance-actions">
                                    <button id="add-funds">Add Funds</button>
                                    <button id="send-money">Send Money</button>
                                </div>
                            </div>

                            <nav class="main-nav">
                                <button class="nav-item active" data-section="dashboard">
                                    <i class="fas fa-home"></i>
                                    <span>Dashboard</span>
                                </button>
                                <button class="nav-item" data-section="transactions">
                                    <i class="fas fa-exchange-alt"></i>
                                    <span>Transactions</span>
                                </button>
                                <button class="nav-item" data-section="bookings">
                                    <i class="fas fa-hotel"></i>
                                    <span>Bookings</span>
                                </button>
                                <button class="nav-item" data-section="insurance">
                                    <i class="fas fa-shield-alt"></i>
                                    <span>Insurance</span>
                                </button>
                            </nav>

                            <main class="content-area">
                                <section id="dashboard-section" class="content-section active">
                                    <h2>Welcome to your Travel Wallet</h2>
                                    <p>Manage your travel finances in one place.</p>
                                </section>
                            </main>
                        </div>

                        <!-- Offline Indicator -->
                        <div class="offline-indicator" id="offline-indicator">Offline Mode - Changes will sync when online</div>

                        <!-- Toast Notification -->
                        <div class="toast" id="toast-notification"></div>

                        <script>
                            document.addEventListener('DOMContentLoaded', function () {
            // DOM Elements
            const loginPage = document.getElementById('login-page');
                            const appContainer = document.getElementById('app-container');
                            const loginForm = document.getElementById('login-form');
                            const logoutBtn = document.getElementById('logout-btn');
                            const offlineIndicator = document.getElementById('offline-indicator');
                            const toast = document.getElementById('toast-notification');

                            // Hard-coded credentials for demo
                            const validCredentials = {
                                email: "stmaphosa17@gmail.com",
                            password: "password123"
            };

                            // Show toast notification
                            function showToast(message, duration = 3000) {
                                toast.textContent = message;
                            toast.classList.add('show');
                setTimeout(() => {
                                toast.classList.remove('show');
                }, duration);
            }

                            // Check if user is already logged in
                            if (localStorage.getItem('isLoggedIn') === 'true') {
                                loginPage.style.display = 'none';
                            appContainer.style.display = 'block';
                            showToast('Welcome back!');
            }

                            // Handle login form submission
                            loginForm.addEventListener('submit', function (e) {
                                e.preventDefault();
                            const email = document.getElementById('login-email').value;
                            const password = document.getElementById('login-password').value;

                            // Simple validation
                            if (!email || !password) {
                                showToast('Please enter both email and password');
                            return;
                }

                            // Check credentials
                            if (email === validCredentials.email && password === validCredentials.password) {
                                // Store login state
                                localStorage.setItem('isLoggedIn', 'true');
                            // Hide login page and show app
                            loginPage.style.display = 'none';
                            appContainer.style.display = 'block';
                            // Show welcome message
                            showToast('Login successful! Welcome to Travel Wallet');
                            // Clear form fields
                            document.getElementById('login-email').value = '';
                            document.getElementById('login-password').value = '';
                } else {
                                showToast('Invalid email or password');
                }
            });

                            // Handle logout
                            logoutBtn.addEventListener('click', function () {
                                localStorage.removeItem('isLoggedIn');
                            appContainer.style.display = 'none';
                            loginPage.style.display = 'flex';
                            showToast('Logged out successfully');
            });

                            // Forgot password link
                            document.getElementById('forgot-password').addEventListener('click', function (e) {
                                e.preventDefault();
                            showToast('Password reset link would be sent to your email');
            });

                            // Sign up link
                            document.getElementById('sign-up').addEventListener('click', function (e) {
                                e.preventDefault();
                            showToast('Sign up functionality would go here');
            });

                            // Add funds button
                            document.getElementById('add-funds').addEventListener('click', function() {
                                showToast('Add funds functionality would go here');
            });

                            // Send money button
                            document.getElementById('send-money').addEventListener('click', function() {
                                showToast('Send money functionality would go here');
            });

                            // Navigation functionality
                            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                                item.addEventListener('click', function () {
                                    // Remove active class from all items
                                    navItems.forEach(navItem => navItem.classList.remove('active'));
                                    // Add active class to clicked item
                                    this.classList.add('active');
                                    // Show appropriate section
                                    showToast(`Showing ${this.querySelector('span').textContent} section`);
                                });
            });

                            // Update online/offline status
                            function updateOnlineStatus() {
                if (navigator.onLine) {
                                offlineIndicator.classList.remove('show');
                } else {
                                offlineIndicator.classList.add('show');
                }
            }

                            // Set up online/offline event listeners
                            window.addEventListener('online', updateOnlineStatus);
                            window.addEventListener('offline', updateOnlineStatus);
                            updateOnlineStatus();
        });
                        </script>
                    </body>
                </html>
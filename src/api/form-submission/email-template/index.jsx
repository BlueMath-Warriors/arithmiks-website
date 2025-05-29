export const generateContactResponseEmail = (formData, firstName) => {
  return `
 <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;500;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap" rel="stylesheet">
    <style>

        .header{
        background-image: url('https://dl.dropboxusercontent.com/scl/fi/84ttzkuibqud9ts93u1xc/header-bg.png?rlkey=kte3wu6uy5m1f99bvy7o6airz&dl=0');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 640px;
        height: 112px;
        position: relative;
        text-align: left;
        }
        .wrapper {
        width: 100%;
        table-layout: fixed;
        }
        .main {
        margin: 0 auto;
        max-width: 700px
        }

        .company-logo{
        display: inline;
        height: 44px;
        padding: 40px 10px 0px 48px
        }

        .main-container{
        width: 640px;
        background: #FFF;
        background-color: rgba(255, 255, 255, 0.7);
        }

        .mail-body{
        background-image: url('https://dl.dropboxusercontent.com/scl/fi/hspfiy10mip1tcnltu9wt/bg-effects-3.png?rlkey=wq8uwyydm5ijko5xcn9oti93q&dl=0');
        -moz-background-size: 100% 100%;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding-bottom: 32px;
        }
        .section{
        width: 544px;
        text-align: left;
        }

        .detail_heading{
        color: #1088EF;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 4px;
        }

        .detail_value{
        color: #101010;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        }

        .text_sm{
        font-size: 14px;
        }

        .thanks-text{
        margin-top: 20px;
        margin-bottom: 35px;
        height: 48px;
        }
        .thanks-text p{
            color: #384860;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.2px;
        }

        a{
        text-emphasis: none;
        text-decoration: none;
        }

        body, h1, h2, h3, p {
        margin: 0;
        padding: 0;
        }

        body{
        text-align: center
        }

        .container {
        max-width: 600px;
        margin: 0 auto;
        }

        .content {
        position: relative;
        padding: 20px 48px;
        text-align: left;
        }

        .main-heading{
        color: #121A26;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        margin-bottom: 24px;
        }

        .main-text{
        color: #101010;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.2px;
        width: 544px;
        margin-bottom: 24px;
        }


        .break{
        border-top: 1px solid #E8ECF4;
        margin: 8px 0px;
        }

        .back-button{      
        padding: 20px 32px;
        gap: 10px;
        border-radius: 8px;
        border: none;
        background: #3B82F6;

        color: #FFF;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 25.6px */
        }

        .footer{
        padding: 24px 48px;
        text-align: left;
        background: rgba(240, 240, 240, 0.30);
        margni-bottom: 32px;
        }

        .footer-text{
        color: #202B3C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.2px;
        z-index: 10;
        }

        .underlined-text{
        color: #2969FF;
        text-decoration: underline;
        }
    </style>
    </head>
    <body>
    <center class="wrapper">
        <table class="main" width="100%">
        <div class="main-container">

            <div class="header">
            <img class="company-logo" src="https://dl.dropboxusercontent.com/scl/fi/4mpymtw1bbvo9ddppgyrq/company-logo-name.png?rlkey=3t7mmrjvtwj2jf7xf3v5wh3da&dl=0" alt="">
            </div>
            <div class='mail-body'>
            <div class="content">
                <h2 class="main-heading">Received your following details</h2>
                <p class="main-text">Hi ${firstName},<br><br> We have received your following details. Our Team will reach out to you soon.</p>
        
                <div class="section">
                <h3 class="detail_heading">How can we help you?</h3>
                <p class="detail_value">${formData.category}</p>  
                </div>
    
                <hr class="break">
        
                <div class="section">
                <h3 class="detail_heading">Your Name</h3>
                <p class="detail_value">${formData.full_name}</p>  
                </div>
                <hr class="break">
    
                <div class="section">
                <h3 class="detail_heading">Email</h3>
                <p class="detail_value text_sm">${formData.email}</p>  
                </div>
                <hr class="break">
    
                <div class="section">
                <h3 class="detail_heading">Phone</h3>
                <p class="detail_value text_sm">${formData.phone_number}</p>  
                </div>
                <hr class="break">
    
                <div class="section">
                <h3 class="detail_heading">Organization</h3>
                <p class="detail_value text_sm">${formData.organization}</p>  
                </div>
                <hr class="break">
    
                <div class="section">
                <h3 class="detail_heading">Tell us about your project..</h3>
                <p class="detail_value text_sm">${formData.message}</p>  
                </div>
                <hr class="break">
    
                <div class="thanks-text">
                <p>
                    Thanks, <br>Arithmiks Team
                </p>
                </div>
                
                <a href="https://arithmiks.com">
                <span class="back-button">
                    Back to Arithmiks
                </span>
                </a>
    
            </div>  
            <div class="footer">
                <p class="footer-text">
                This email was sent to <a href=""><span class="underlined-text">services@arithmiks.com</span>
                    537-C, Faisal Town, Lahore<br>
                    © 2024 Arithmiks
                </p>
            </div>  
            </div>
        </div>
        </table>
    </center>
    </body>
    </html>`;
};

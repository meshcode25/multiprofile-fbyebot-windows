
// Launch the browser and open a new blank page
// app.js

async function runAutomation() {
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🕐 Starting automation at", new Date().toLocaleString() ," \n");




    try {
        // ✅ Put all your automation code here:
        // e.g., launch Chrome, connectOverCDP, post to Facebook, etc.

        // Example placeholder:
        // await launchBrowserForProfile(profilePath);
        // await doAutomation(page);




        // #!/usr/bin/env node

        // import dotenv from 'dotenv';
        // dotenv.config();
        
        // Or import puppeteer from 'puppeteer-core';
        // import { fileURLToPath } from 'url';
        
        
        
        
        const dotenv = require('dotenv');
        dotenv.config();
        
        
        // const puppeteer = require('puppeteer-extra'); // or puppeteer-core
        const path = require('path');
        const fs = require('fs');
        const os = require('os');
        const { platform } = require('process');
        const { chromium } = require('playwright');
        const { spawn } = require('child_process');
        const { exec } = require('child_process');
        // const net = require("net")s;
        
        
        // const StealthPlugin = require('puppeteer-extra-plugin-stealth');        
        // puppeteer.use(StealthPlugin());
        
        // // To get __dirname and __filename in CommonJS
        // const fileur = __filename || require('url').fileURLToPath(import.meta.url);
        // const __dirname = path.dirname(__filename);
        
        // const fileURLToPath =require('')
        
        // Import your own module (also must be CommonJS!)
        // // you’ll need to update these files too
        // const { postTogroups } = require('./posttogroups.js'); 
        // const { listInmorePlaces }= require('./listinmoreplaces.js');
        
        const { createMarketplaceListing } =require( './listonmarketplace.js');
        
        
        
        
        
        
        
        
        
        
        
        
        
        (async ()=>{
        
            try{


                //First Killing all Existing chromes 
                const killchromes= async()=>{
                    const isWindows = process.platform === 'win32';
                    
                    const killCommand = isWindows
                    ? 'taskkill /F /IM chrome.exe /T' // Windows
                    : 'pkill chrome';                // Linux/macOS
                    
                    return new Promise((resolve,reject)=>{

                        exec(killCommand, (error, stdout, stderr) => {
                            if (error) {
                                console.error(`❌ Error killing Chrome: ${error.message}`);
                                setTimeout(resolve,3000)

                                // reject(error)
                                return;
                            }
                            if (stderr) {
                                console.error(`⚠️ stderr: ${stderr}`);
                                // resolve(resolve=> setTimeout(resolve,30000))
                                setTimeout(resolve,3000)

                                return;
                            }
                                console.log(' ✅ Chrome processes killed');
                                // resolve(resolve=> setTimeout(resolve,30000))
                                setTimeout(resolve,3000)

                        });
                        

                    })
                }        
            
                //Kill Chrome processes 
                console.log("\About to kill All Chrome Processes Running Before Starting the Program waiting for 5 Seconds");
                await delay(5000)

                function delay(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                  }
                  
                  // await killchromes()
                console.log("Waited 10 Seconds")
                // await killchromes()





        
                console.log('WELCOME TO Fbyebot FB Marketplace Automation Software; The App Just Started')
        
        
        
        
                const dataFile = path.join(os.homedir(), '.eingerichtet.json');
                const max = 31
        
                function getTageSince(dateStr) {
                    const einrichten = new Date(dateStr);
                    const now = new Date();
                    const nowUTC=new Date(now.toISOString())
                    const diffZeit = nowUTC.getTime() - einrichten.getTime();
        
                    // console.log("Here isthe einrichten Uhrzeit ", einrichten),
                    // console.log("Here isthe JetztUTC Uhrzeit ", nowUTC),
                    // console.log("here is the zeit  unterschied ", diffZeit/(1000*60*60*24))
                    // return Math.floor(diffZeit / (1000 * 60 * 60 * 24));
        
                    
                    return Math.floor(diffZeit / (1000 * 60 * 60 * 24));
                    
                }
        
                async function checkProbeZeit() {
                    if (!fs.existsSync(dataFile)) {
                        // First run: store the current datea
                        const data = { einrichtenOn: new Date().toISOString() };
                        fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
                        return true;
                    }
        
                    // File exists: check the date
                    const raw = fs.readFileSync(dataFile);
                    const { einrichtenOn } = JSON.parse(raw);
                    const tagePassed = getTageSince(einrichtenOn);
        
                    if (tagePassed > max) {
                        console.log(`⛔ CRITICAL ERROR NUMBER (${tagePassed} ). PLEASE CONTACT DEVELOPER!.`);
                        console.log(`⛔ CRITICAL ERROR ENCOUNTERED!! ⛔. PLEASE CONTACT DEVELOPER!. Email: yegonk247@gmail.com or phone: +254706727834`);
        
                        return false;
                    }
        
                        console.log(`✅ VALID NUMBER.... ${tagePassed} and ${max}`);
                        console.log(`✅ NO CRITICAL ERRORS ENCOUNTERED`);
        
        
                    return true;
                }
        
        
        
        
        
        
        
        
        
        
        
                const probeOk = await checkProbeZeit();
                
                if (!probeOk) {
                    return (`⛔ CRITICAL ERROR ENCOUNTERED!! ⛔. PLEASE CONTACT DEVELOPER.`);
                }
        
                console.log(`✅ NO CRITICAL ERRORS ENCOUNTERED MAKE RUN`);
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                // Detect platform and set Chrome path accordingly
                function getChromeExecutablePath() {
        
                    const platform = os.platform();
        
                    if (platform === 'win32') {
                        // Windows
                        const winChromePaths = [
                            "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
                            "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
                        ];
        
                        for (const p of winChromePaths) {
                            if (fs.existsSync(p)) return p;
                        }
                    }
                    else if (platform === 'darwin') {
                        // macOS
                        return "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
                    }
                    else if (platform === 'linux') {
                        // Linux
                        const linuxChromePaths = [
                            '/usr/bin/google-chrome',
                            '/usr/bin/chromium-browser',
                            '/usr/bin/chromium'
                        ];
                
                        for (const p of linuxChromePaths) {
                            console.log("path to chrome ", p)
                            if (fs.existsSync(p)) return p;
                        }
                    }
        
                    return null; // fallback if none found
                }
        
                const chromePath = getChromeExecutablePath();
                console.log(chromePath);
        
                if (!chromePath) {
        
                    console.error("❌ Could not find Chrome/Chromium on this system.");
                    process.exit(1);
                }
        
        
                function getAppDataDir(appName = 'fbsellify') {
                    const home = os.homedir();
        
                    if (platform === 'win32') {
                        return path.join(process.env.APPDATA || path.join(home, 'AppData', 'Roaming'), appName);
                    }
        
                    // Linux and macOS
                    return path.join(home, '.config', appName);
                }
        
                const appDir = getAppDataDir(); // e.g., ~/.config/fbyebot or %APPDATA%\fbyebot


                 // Ensure folder exists
                 if (!fs.existsSync(appDir)) {
                     fs.mkdirSync(appDir, { recursive: true });
                    console.log("No AppDir Found Just Created a New AppDir  at ", appDir);
                }
                console.log("AppDir Found, Continue...")
                fs.chmodSync(appDir,0o755)
            
        
                const chromeUserDataDir = path.join(appDir, "fbyebotChromeProfiles")
        
                if(!fs.existsSync(chromeUserDataDir)){
                    fs.mkdirSync(chromeUserDataDir,{recursive:true});
                    console.log(" chromeUserDataDir not Found!! , Just Created a new chromeUserDataDir  in ", chromeUserDataDir );
                }
            
                console.log("chromeUserDataDir path Found at "  , chromeUserDataDir, " Continue... ")
                fs.chmodSync(chromeUserDataDir,0o755)
            



                const home=os.homedir();


                // Where to store user files (can be current dir or ~/.config/appname)
                const envDir = path.join(home, "Tüm ürünler klasörünüzün yolu");

                // Create the directory if it's missing
                if (!fs.existsSync(envDir)) {
                    fs.mkdirSync(envDir, { recursive: true });
                    console.log(`\nCreated directory for allproducts root folder paths: ${envDir}`);
                }
                fs.chmodSync(envDir,0o755)


                // Where to store user files (can be current dir or ~/.config/appname)
                const envPath = path.join(envDir ,'.env');
                const cookiesPath = path.join(appDir, 'cookies.json');  
                
               
                // Create default .env if missing
                if (!fs.existsSync(envPath)) {
                    // Create default .env if missing

                    // Define the content with a newline character (\n)
                    const envContent = `root="Tüm ürünler klasörünüzün yolu"\nlicenseKey="Lisans Anahtarınızı Girin"`;

                    // Write the content to the file
                    fs.writeFileSync(envPath, envContent);


                    // fs.writeFileSync(envPath, 'root="Tüm ürünler klasörünüzün yolu"');
                    console.log('\n \n ⛔ .env dosyası oluşturuldu. Lütfen ana klasörünüze gidip Tüm ürünler klasörünüzün yolu klasörünü arayın ve ardından .env dosyasındaki tüm ürünler klasörünüzün yolunu doldurun."')
        
                }
                fs.chmodSync(envPath,0o755)
                
                // Create default cookies.json if missing
                if (!fs.existsSync(cookiesPath)) {
                    fs.writeFileSync(cookiesPath, JSON.stringify([], null, 2));
                    console.log('\n ⛔cookies.json file created. go to your home folder then search .config or APPDATA(if on windows), then click it and look for folder called fbyebot-us-2.0 click it then you can log in to facebook copy and paste the cookies here in the cookie.json  \n\n');
                }
                fs.chmodSync(cookiesPath,0o755)
                
                // Load env
                dotenv.config({ path: envPath });
                
                // Use cookies.json
                // const cookies = JSON.parse(fs.readFileSync(cookiesPath, 'utf-8'));
        
        
                // Load cookies from the cookie.json file
                const cookies = JSON.parse(fs.readFileSync(cookiesPath));
        
                        
        
                const cacheDir = path.join(appDir, 'usercache', 'images');
        
                if (!fs.existsSync(cacheDir)) {
                  fs.mkdirSync(cacheDir, { recursive: true });
                }
                
                // const screenshotPath = path.join(cacheDir, 'home.png');
                // await page.screenshot({ path: screenshotPath });
                
        
                const marketplacelistingimgs = path.join(appDir, 'marketplacelistingimgs');
        
                if (!fs.existsSync(marketplacelistingimgs)) {
                  fs.mkdirSync(marketplacelistingimgs, { recursive: true });
                }
        
        


















               //LIst of profiles to use 
               const userprofiles=[
                   "Profile 40", //Tito's account to me
                //    "Default", //Ken Lopez Facebook Account 

                ]   




                for(const userprofile of userprofiles){
                    const chromeUserProfile = path.join(chromeUserDataDir, userprofile)
                    
                    if(!fs.existsSync(chromeUserProfile)){
                        fs.mkdirSync(chromeUserProfile,{recursive:true});
                        console.log(" chromeUserProfile  not Found, Just Created a new chromeUserDataDir  in ", chromeUserProfile );
                    }
                
                    console.log("chromeUserProfile path Found at "  , chromeUserProfile, " Continue... ")
                    fs.chmodSync(chromeUserProfile,0o755)
                
                }
        

                // Function to get the current profile index based on a 3-hour rotation
                function getRotatedIndex() {
                    const totalProfiles = userprofiles.length;
                    const now = new Date();
                    return Math.floor(now.getHours() / 12.99) % totalProfiles; // Change the profile every 3 hours
                }
        
                // // Function to get the current profile index based on a 10 MInuts for testing -hour rotation
                // function getRotatedIndex() {
                //     const totalProfiles = userprofiles.length;
                //     const now = new Date();
                //     return Math.floor( now.getMinutes() / 11.9) % totalProfiles; // Change the profile every 3 hours
                // }
        

            



                //get profile index
                const profileIndex=getRotatedIndex();
                console.log("\n Here isthe Index to select Profile Index " + profileIndex)
        

                console.log('\n 🚀 Launching Chrome with Playwright Persistent Storage... First here is the Chrome Path  '   ,chromePath , 'Here is the user--data-dir ' + chromeUserDataDir, "and here is the profile-diretory  " + userprofiles[profileIndex]);

                const userDataDir = path.join(chromeUserDataDir,userprofiles[profileIndex])
                
                const browser= await chromium.launchPersistentContext(userDataDir, {
                  headless: false,
                  executablePath: chromePath,
                    args: [
                      '--disable-notifications',
                      '--disable-blink-features=AutomationControlled',
                      '--disable-infobars',
                      '--no-sandbox', // Use with caution, understand the security implications
                      '--disable-setuid-sandbox',
                      '--disable-dev-shm-usage',
                      '--ignore-certificate-errors',
                      '--ignore-ssl-errors',
                      '--disable-extensions', // Sometimes extensions can interfere
                      '--disable-component-extensions-with-background-pages',
                    ],
                    // *****This is Webshare proxies***************


                });
                
                // Continue with automation using `browserContext.pages()[0]` or `browserContext.newPage()`
                


                //launch new page
                const page=await browser.newPage();

                await page.setViewportSize  ({width: 1800, height: 900});
                

                console.log("Waiting for 5 Seconds before screeshot for after Proxy Login")

                await page.evaluate(async ()=>{
                    return new Promise(resolve => setTimeout(resolve, 2000))
                })


                //****************//License Key logic ***************

                // The full path to your local HTML file
                const localFilePath = 'https://fbsellify.com';
                const dashboardUrl="https://fbsellify.com/dashboard.html";
                const envLicenseKey=process.env.licenseKey;
                console.log("envLicenseKey ", envLicenseKey);

                try {
                    await page.goto(localFilePath, {waitUntil:"domcontentloaded"});
                    
                    console.log(`Successfully navigated to: ${page.url()}`);

                    //Enter the license key into the input

                    // 1. Correct the locator syntax using brackets [ ]
                    const licenseKeyInput = page.locator('input[type="text"]'); 

                    if(envLicenseKey){
                        // 2. Fill the input field
                        await licenseKeyInput.fill(envLicenseKey);


                        // Click confirm button Key License Key
                        const confirmbutton=page.locator("button[type='submit']")
                        await confirmbutton.click();

                        console.log("Just clicked on the confirm button for License confirmation ")

                    }
                    else{
                        console.log("\n No env License Key...waiting for User Manual License Key Input \n")
                    }
                    

                    // -----------------------------------------------------------
                    // 3. Conditional Flow Check (Handles both initial and subsequent attempts)
                    // -----------------------------------------------------------
                    
                    try {
                        // Playwright waits up to 10 seconds for the URL to redirect to the dashboard.
                        await page.waitForURL(dashboardUrl, { timeout: 150000 }); 
                        
                        console.log("✅ Validation successful and redirected. Proceeding with automation...");
                        
                        // Wait for the Dashboard content (The element you were locating)
                        const welcomeToDashboard = page.locator("xpath=//h1[contains(text(), 'Welcome to Fbsellify Dashboard')]");
                        await welcomeToDashboard.waitFor({ state: 'visible', timeout: 5000 });

                        // --- CODE TO AUTOMATE THE DASHBOARD GOES HERE ---
                        // (The 'continue' logic)
                        
                        // Example: await page.locator('#start-bot-button').click();


                        if(await welcomeToDashboard.count()>0){
                            console.log("Valid License Key....Continue with fbautomaion...")
                        }
                        else{
                            console.log("Probably inValid License Key....PAUSE with fbautomaion...")
                            console.log("Waiting for VAlid Licnese key to Proceed with Automation...")
                            // await page.pause();
                            
                        }



                    } 
                    catch (e) {
                        // This block executes if the redirect fails (URL remains fbsellify.com)
                        console.log("🛑 Validation FAILED. Could not redirect to dashboard. Staying on current page for License Key Manual Input.");
                        
                        // ------------------------------------------------------------
                        // 4. Implement Logic to Handle Subsequent Attempts (If Needed)
                        // ------------------------------------------------------------
                        
                        // If you want to enter a VALID key here and re-try:
                        console.log("Attempting second validation with a known-GOOD key.");
                        
                        // Clear the input and enter a known valid key
                        // await licenseKeyInput.fill("VALID-KEY-FROM-DB"); 
                        // await confirmButton.click();
                        
                        // Re-check for the redirect after the second attempt
                        try {
                            await page.waitForURL(dashboardUrl, { timeout: 150000 });
                            console.log("Second Attempt to Check License Key Before Proceeding with automation...");
                            
                                // Re-run the dashboard automation code here or move it to a function
                                
                                // Wait for the Dashboard content (The element you were locating)
                                const welcomeToDashboard = page.locator("xpath=//h1[contains(text(), 'Welcome to Fbsellify Dashboard')]");
                                await welcomeToDashboard.waitFor({ state: 'visible', timeout: 5000 });

                                // --- CODE TO AUTOMATE THE DASHBOARD GOES HERE ---
                                // (The 'continue' logic)
                                
                                // Example: await page.locator('#start-bot-button').click();


                                if(await welcomeToDashboard.count()>0){
                                    console.log("Valid License Key....Continue with fbautomaion...")
                                }
                                else{
                                    console.log("Probably inValid License Key....PAUSE with fbautomaion...")
                                    console.log("Waiting for VAlid Licnese key to Proceed with Automation...")

                                    // await page.pause();
                                }
                            
                        } catch (e2) {
                            // If the second attempt fails, then we pause.
                            console.log("❌ Second attempt failed. PAUSE for manual Valid Key Input .");
                            // await page.pause();
                            await browser.close();

                        }
                    }



                } catch (error) {
                    console.error(`Error navigating to the fbsellify Dashboard Enter Valid License Key: ${error}`);
                } finally {
                    // await browser.close();
                }


                await page.waitForTimeout(1000)
                console.log("Waiting after going to sellify Ip Address Domain....");


















                
                // Capture a screenshot to verify the setup
                await page.screenshot({ path: 'example.png' });
            
                // await browser.close();


        
                //launch new page
                // const page=await browser.newPage();
                
                console.log("Waiting for 5 minutes before proceeding to Facebook.com....")

                await page.evaluate(async ()=>{
                    return new Promise(resolve => setTimeout(resolve, (3 * 1000)))
                })

        
                console.log('🧭 Page:', page.url());
                
                await page.goto('https://www.facebook.com/', { waitUntil: 'domcontentloaded', timeout:60000 });
        
                


                const url = page.url();
                
                try{
                    // await page.wait

                    //  Wait and click on first result.
                
                    await page.waitForSelector("a[aria-label='Home'][role='link']")
            
                    console.log('✅ Already logged in to FACEBOOK!');
                }
                catch(err){
                    if(err.name==="TimeoutError"){
                        console.log('❌ Not logged in to Facebook! Kindly Check the Browser and Login');
                    }
                }

        

        
                try{
        
                    // Set the cookies in the page
                    // await context.addCookies(...cookies);
        
        
                    // await page.goto('https://www.facebook.com/   ', { waitUntil: 'networkidle', timeout:30000 });
        
        
        
                    await page.waitForSelector("a[aria-label='Home'][role='link']")
            
                    const homebutton=await page.$('a[aria-label="Home"][role="link"]')
        
                    if(homebutton){
                        console.log("Wow! Yess! Just landed on the Home page")
        
        
                            
                        await page.evaluate(async()=>{
                            return new Promise(resolve => setTimeout(resolve, 5000))
                        }); 
        
                        
                        // await postTogroups(page,browser);
        
        
                        await createMarketplaceListing(page,browser);
        
                        // await listInmorePlaces(page,browser);
        
                        // await browser.close();
                    }
                    else{
                        //wait for redirect after clicking the loginbutton
                        await page.waitForNavigation({timeout:300000});
                        console.log("Error catch No Home Page Found")
        
                    }
        
 
                    // *****************This logging in part comment out for now***********
        
                        // Type into search box.
                        // await page.locator('#email').fill(`${process.env.email}`);
        
                        // await page.locator('#pass').fill(`${process.env.password}`);
                        // await page.locator('#pass').fill(`${process.env.password}`);
        
                        // Wait and click on first result.
                        // await page.locator('#loginbutton').click();

        
                }
                catch(error){
                    console.log("Caough ERror AFter trying to use Cookies \n" + error);
                    console.log(error);
        
                    if(error.name==="TimeoutError"){
                        // Navigate the page to a URL.Navigate to the website
                        // await page.goto('https://www.facebook.com/', { waitUntil: 'networkidle2', timeout:30000 });
        
                        // await page.setCookie(...cookies);
        
                        
                        // Navigate the page to a URL.Navigate to the website
                        // await page.goto('https://www.facebook.com/', { waitUntil: 'networkidle2', timeout:80000 });
                        // await page.goto('https://www.facebook.com/', { waitUntil: 'networkidle2', timeout:30000 });
                        
        
                        // Perform actions on the page
        
        
                        //  wait for 30 seconds before starting to scroll the joined groups 
                        //  await page.evaluate(async()=>{
                        //     return new Promise(resolve => setTimeout(resolve, 300000))
                        // }); 
        
                        //wait for redirect after clicking the loginbutton
                        await page.waitForNavigation({timeout:300000});
        
                        // await page.waitForNavigation({ waitUntil: 'networkidle2' });
        
                        // For example, take a screenshot
                        // await page.screenshot({ path: './cookieshomelogin.png' });
                        await page.screenshot({ path: './cookieshomelogin.png' });
        
                        // console.log("Aleaady taken a screen shot of the Home page after login using cookies found in cookieshomelogin.png ")
                        console.log("Aleaady taken a screen shot of the Home page after login using cookies found in cookieshomelogin.png ")
        
        
                        //  await page.screenshot({ path: "./userscache/images/home.png" });
                        await page.screenshot({ path: path.join(cacheDir, "home.png" )});
        
   
                        // *****************This one is the copy of the Above for logging in***********
        
                        // console.log('No cookies or cache found, redirecting to login...');
                        console.log('No cookies or cache found, redirecting to login...');
                        
                        // Navigate the page to a URL.
                        // await page.goto('https://www.facebook.com/login/', {waitUntil:'networkidle2', timeout:30000});
        
                        await page.screenshot({ path: path.join(marketplacelistingimgs, "homepage.png" )});
                        // await page.screenshot({ path: "./marketplacelistingimgs/homepage.png" });
        
                        console.log("Just took a Login Success screenshot  markerplacelisttinfg to home.png")
                            // wait for 30 seconds before starting to scroll the joined groups 
        
                        // Wait for the email input to be available
                        // await page.waitForSelector('#email');
        
        
                        // Wait for the email input to be available
                        // await page.waitForSelector('#pass');
        
                        // Wait for the login button submit to be available
                        // await page.waitForSelector('#loginbutton');
        
                        // //console.log email from process.env file
                        // console.log(process.env.email)
                        // console.log(process.env.password)
        

        
                        try{
                            await page.waitForSelector("a[aria-label='Home'][role='link'")
        
                            const homebutton=await page.$('a[aria-label="Home"][role="link"]')
        
                            if(homebutton){
                                console.log("Wow! Yess! Just landed on the Home page")
                            }
                            else{
                                //wait for redirect after clicking the loginbutton
                                await page.waitForNavigation({timeout:300000});
        
                            }
                            
        
                        }
                        catch(error){
                            if(error.name==="TimeoutError"){
                                //wait for redirect after clicking the loginbutton
                                await page.waitForNavigation({timeout:300000});
                            }
                            else{
                                console.log("Different Error Encountered");
                            }
                        }
        

        
        
                        // await page.evaluate(async()=>{
                        //     return new Promise(resolve => setTimeout(resolve, 5000))
                        // }); 
        
        
                        // // }
        
        
                        
                        // await page.evaluate(async()=>{
                        //     return new Promise(resolve => setTimeout(resolve, 5000))
                        // }); 
        
                        
                        // await postTogroups(page,browser);
        
        
                        await createMarketplaceListing(page,browser);
        
                        // await listInmorePlaces(page,browser);
        
                        // await browser.close();
        
                        
                    }   
                    else{
                        console.log("It's just another stupid error   ,  \n", error)
                        console.log(error)
                    }
                }
        
                    
            }
            catch(err){
                console.log("I just created an error during login")
                console.log(err);
            }
        })()
        
        
        
        
        
        
        
        



















        console.log("✅ Automation completed.");
    } catch (err) {
        console.error("❌ Automation failed:", err);
    }

    console.log("⏳ Waiting 3 hours until next run...\n");

    // await browser.close()

    // Wait for 3 hours (10 min = 600000 for testing)
    setTimeout(runAutomation, 13 * 60 * 60 * 1000);
    // Wait for every 3 minuts to start application 
    // setTimeout(runAutomation, 12 * 60 * 1000);

}

// Start the loop
runAutomation();

# **book-search-engine**
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description 
  Budget Tracker PWA is a budgeting tool that offers functionality even when the user is disconnected from the internet (progressive web application).  The user can add a transaction description and amount, which is either debited or credited from the total depending on button clicked.  In addition, the app contains a graph, so balance changes can be viewed over a period of time.  

  Behind the scenes, the app is utilizing indexed DB and a service worker to allow the user to continue adding transactions even if disconnected from the internet.  Once an internet connection is restored, the database is updated with all transactions added while offline.  
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests) 
  * [Questions](#questions)
  * [Example](#example)
  
  ## Installation Instructions <a name="installation"></a> 
  A user will need to clone the repository "budget-tracker-PWA" and then run npm install.  The dependencies that will be installed include mongoose, express, compression and morgan.  In addition, the user needs to have access to mongoDB.

  Since the application utilizes a databaase, it should be housed on a platform that supports this functionality.  For example, the app does not reside on a GitHub pages, but on heroku instead: https://budget-tracker-5000.herokuapp.com/.
  
  ## Usage Instructions <a name="usage"></a>
  For any user who wants a simple budgeting tool.  In addition, the PWA functionality of the app can be used for other applications as well.

  ## License <a name="license"></a>
  MIT
  
  ## Contributing <a name="contributing"></a>
  Files are open source, but please adhere to the Contributor Convenant Code of Conduct.
  
  ## Tests <a name="tests"></a>
  No tests

  ## Questions <a name="questions"></a>
  http://www.github.com/DJS593
  
  Email stadj099@yahoo.com with any additional questions. 
  
  ## Budget-Tracker-PWA Example<a name="example"></a>
  ![image](https://user-images.githubusercontent.com/61851131/87883771-7f9a2880-c9be-11ea-817e-a8e35c656c09.png)

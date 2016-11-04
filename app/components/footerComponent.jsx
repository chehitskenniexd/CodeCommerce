import React from 'react';
import { Link } from 'react-router';

export default () => (
 <footer>
     <div>
      <div>
        <p>
          © {new Date().getFullYear()} 
        </p>
        <p>
          CodeCommerce
        </p>
      </div>
     <div>          
         <ul className="nav navbar-nav pull-right">
           <li>Facebook Icon with link</li>
           <li>Instagram Icon with link</li>
         </ul>
     </div>   
         <p>Created at FullStack</p>
  </div>
       
</footer>

);


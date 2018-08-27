import React from 'react';
import 'normalize.css';

export default ({ children }) => (
  <div>
    {children}
    <style jsx global>
      {`

        @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');

        body {
          margin: 0;
          padding: 0;
          font-family:'Roboto', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        .owl-carousel{
          display:block!important;
        }


      `}
    </style>
    <script>

    </script>
  </div>
);

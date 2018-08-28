import React from 'react';
import '../../node_modules/normalize.css/normalize.css';

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
             .owl-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
      }
       .owl-dots .active span {
          width: 2px !important;
          height: 35px !important;
          background: #fff !important;
      }
       .owl-dots .owl-dot {
          outline: none;
          background-color: transparent;
      }
       .owl-dots .owl-dot span {
          width: 2px !important;
          height: 15px;
          position: relative;
      }
       .owl-dots .owl-dot span:hover {
          background: #fff !important;
      }
       @media (max-width: 767px) {
           .owl-dots .owl-dot span {
              margin: 5px 4px;
          }
      }
       .owl-dots .owl-dot span:before {
          content: '' !important;
          height: 20px !important;
          width: 2px !important;
          background: #fff;
          position: absolute;
          left: 0;
          bottom: 0;
      }


      `}
    </style>
    <script>

    </script>
  </div>
);

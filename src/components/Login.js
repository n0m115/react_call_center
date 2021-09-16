import React from 'react';

export default function Login() {
  return (
    <div className="wrapper ">
      <div className="page_loader_outer" >
        <div className="page_loader_inner">
          <div className="page_loading">
            <div className="cs-loader">
              <div className="cs-loader-inner">
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
                <label>	●</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hm_screen_outer login_screen">
        <div className="container_holder">
          <div className="hm_container">
            <div className="hm_screen_inner">
              <div className="hm_header">
                <a href="home.html">
                  <img src="images/header_logo.png" alt="#" />
                </a>
              </div>
              <div className="login_inp_sec">
                <ul>
                  <li>
                    <label>
                      <b>MERCHANT ID</b>
                      <input type="text" name="" value="" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <b>PASSWORD</b>
                      <input type="password" name="" value="" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <a href="admin_setting.html">Login</a>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
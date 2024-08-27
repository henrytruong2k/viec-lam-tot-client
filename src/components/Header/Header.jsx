import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <img
        className="logo"
        alt="vieclamtot"
        src="https://static.chotot.com/storage/APP_WRAPPER/logo/job-logo-appwrapper.png"
      />
      <div className="menu">
        <i className="bi bi-list"></i>
        <p>Danh mục</p>
        <i className="bi bi-chevron-down"></i>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Tìm ngay 44.311 việc làm tại Việc Làm Tốt"
        />
        <button type="submit">
          <i className="bi bi-search"></i>
        </button>
      </div>
      <nav>
        <i className="bi bi-bell"></i>
        <i className="bi bi-chat-right-text"></i>
        <div className="news">
          <i className="bi bi-card-list"></i>
          <p>Quản lý tin</p>
        </div>
      </nav>
      <div className="account">
        <i className="bi bi-person-circle"></i>
        <p>Tài khoản</p>
        <i className="bi bi-chevron-down"></i>
      </div>
      <button className="apply">
        <i className="bi bi-check2-square"></i>
        <p>Đăng tuyển</p>
      </button>
    </header>
  );
};

export default Header;

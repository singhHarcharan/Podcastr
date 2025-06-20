import React from 'react';

const AppSidebar = () => {
  return (
    <div className="sidebar"
      style={{
        width: '256px',
        height: '100vh',
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <div className="sidebar-header">
        <div className='sidebar-header-content'
          style={{
            padding: '16px',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <span
              role="img"
              aria-label="play"
              style={{
                marginRight: '8px',
                color: '#f97316',
              }}
            >
              ▶
            </span>
            Podcastr
          </div>
        </div>
        <nav className='sidebar-nav'
          style={{
            marginTop: '24px',
          }}
        >
          <ul
            style={{
              listStyleType: 'none',
              padding: 0,
            }}
          >
            <li
              style={{
                padding: '8px 16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '8px 10px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2d2d2d';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span
                  role="img"
                  aria-label="home"
                  style={{
                    marginRight: '8px',
                  }}
                >
                  🏠
                </span>
                Home
              </div>
            </li>
            <li
              style={{
                padding: '8px 16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '8px 10px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2d2d2d';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span
                  role="img"
                  aria-label="search"
                  style={{
                    marginRight: '8px',
                  }}
                >
                  🔍
                </span>
                Discover
              </div>
            </li>
            <li
              style={{
                padding: '8px 16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '8px 10px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2d2d2d';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span
                  role="img"
                  aria-label="microphone"
                  style={{
                    marginRight: '8px',
                  }}
                >
                  🎙️
                </span>
                Create Podcast
              </div>
            </li>
            <li
              style={{
                padding: '8px 16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '10px 10px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2d2d2d';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span
                  role="img"
                  aria-label="user"
                  style={{
                    marginRight: '8px',
                  }}
                >
                  👤
                </span>
                My Profile
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className='sidebar-footer'
        style={{
          padding: '16px',
        }}
      >
        <div
          style={{
            fontSize: '12px',
            color: '#a3a3a3',
          }}
        >
          © 2025 Podcastr
        </div>
      </div>
    </div>
  );
};

export default AppSidebar;
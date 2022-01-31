import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Fragment>
      <div
        style={{ minHeight: '100vh' }}
        class="d-flex h-100 text-center text-white "
      >
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="mb-auto ">
            <div>
              <h3 className="float-md-start mb-0">React Starter Template</h3>
              <nav class="nav nav-masthead justify-content-center float-md-end">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                <a
                  class="nav-link"
                  href="https://github.com/akshaymemail/react-starter-kit#readme"
                >
                  How To Use
                </a>
                <Link class="nav-link" to="/todo">
                  Todo
                </Link>
              </nav>
            </div>
          </header>

          <main className="px-3 mt-5">
            <h1>Lets Build Something !</h1>
            <p className="lead">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <p className="lead">
              <Link to="/todo" class="btn  fw-bold border-white bg-white">
                Browse Todo
              </Link>
            </p>
          </main>
          <div className="mt-auto text-white-50 fixed-bottom">
            <p>
              React Starter Template{' '}
              <a href="https://getbootstrap.com/" class="text-white">
                Made With Love ❤️
              </a>
              , by{' '}
              <a href="https://github.com/akshaymemail" class="text-white">
                AKSHAY KUMAR SINGH
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home

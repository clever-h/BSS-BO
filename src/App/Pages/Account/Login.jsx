import React from 'react';

function Login() {
  return (
    <section className="p-3 h-100">
      <section className="row h-100">
        <section className="row d-flex align-items-center justify-content-center h-100">
          <section className="col-xl-4 p-2 d-flex flex-column align-items-center justify-content-center">
            <section className="bg-t-o b-r-10 d-flex flex-column align-items-center justify-content-center">
              <img
                alt="Logo"
                className="w-50"
                loading="lazy"
                src="/Assets/Images/Logo.png"
              />
              <span className="pt-4">به میستر پنل خوش آمدید! 👋🏻</span>

              <span className="pt-4 text-center">
                لطفا وارد حساب کاربری خود شوید و ماجراجویی را شروع کنید
              </span>

              <form className="col-12 p-3 text-center" method="POST">
                <section className="d-flex align-items-center justify-content-center flex-column">
                  <section className="col-12 p-3">
                    <input
                      className="input-content-users p-2"
                      name="Email"
                      type="email"
                      placeholder="ایمیل"
                      required={true}
                    />
                  </section>

                  <section className="col-12 p-3">
                    <input
                      className="input-content-users p-2"
                      name="Password"
                      type="password"
                      placeholder="پسورد"
                      required={true}
                    />
                  </section>
                </section>

                <section className="col-12 p-3">
                  <input
                    type="submit"
                    className="input-content-users p-2 bg-main"
                    name="Login"
                    value="ورود"
                  />
                </section>
              </form>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Login;

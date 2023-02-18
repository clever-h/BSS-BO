import React from 'react';
import { Search } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from 'axios';

function DataZitel() {
  const [dataZ, setDataZ] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:5000/DataEmployee');
      setDataZ(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="p-3">
      <section className="row">
        <section className="row d-flex align-items-center justify-content-center">
          <section className="col-xl-12 p-2">
            <section className="bg-t-o b-r-10">
              <section className="d-flex align-items-center justify-content-between p-3">
                <span>اطلاعات کارمندان زیتل</span>
              </section>

              <section className="row d-flex align-items-center justify-content-between p-3">
                <section className="col-xl-6 d-flex align-items-center justify-content-start">
                  <span>نشان دادن</span>

                  <select
                    className="input-forms p-1 m-2 cursor-pointer"
                    name="number-of-items"
                  >
                    <option defaultValue="5">5</option>
                    <option defaultValue="10">10</option>
                  </select>

                  <span>آیتم</span>
                </section>

                <section className="col-xl-6 d-flex align-items-center justify-content-end">
                  <span>جستجو</span>

                  <form className="form-search" method="GET">
                    <input
                      placeholder="جستجو"
                      className="input-form-search"
                      name="Search"
                      required
                    />

                    <button type="submit" className="button-form-search">
                      <Search titleAccess="جستجوی کلمه مورد نظر" />
                    </button>
                  </form>
                </section>
              </section>
            </section>
          </section>

          <section className="col-xl-12 p-2">
            <section className="bg-t-o b-r-10 pr-2 pl-2">
              <section className="p-2 table-users-page-new-user-request">
                <table>
                  <thead>
                    <tr>
                      <th>نام کارمند</th>
                      <th>شماره داخلی</th>
                      <th>سمت شغلی</th>
                      <th>ایمیل</th>
                      <th>واحد</th>
                    </tr>
                  </thead>

                  <tbody>
                    {dataZ &&
                      dataZ.length > 0 &&
                      dataZ.map((userObj, index) => (
                        <tr key={userObj._id}>
                          <td>{userObj.name}</td>
                          <td>
                            <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                              {userObj.phone}
                            </span>
                          </td>
                          <td>{userObj.position}</td>
                          <td> {userObj.email}</td>

                          <td>
                            <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                              BSS
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </section>
            </section>
          </section>

          <section className="col-xl-12 p-2">
            <section className="bg-t-o b-r-10">
              <section className="row d-flex align-items-center justify-content-between p-3">
                <section className="col-xl-6 d-flex align-items-center justify-content-start">
                  <button className="input-buttons">قبلی</button>
                  <button className="input-buttons">1</button>
                  <button className="input-buttons">2</button>
                  <button className="input-buttons">3</button>
                  <button className="input-buttons">...</button>
                  <button className="input-buttons">10</button>
                  <button className="input-buttons">بعدی</button>
                </section>

                <section className="col-xl-6 d-flex align-items-center justify-content-end">
                  <span>نمایش 1 تا 5 از 5 ورودی</span>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default DataZitel;

import React from 'react';
import { Search } from '@mui/icons-material';

function DataAccess() {
  return (
    <section className="p-3">
      <section className="row">
        <section className="row d-flex align-items-center justify-content-center">
          <section className="col-xl-12 p-2">
            <section className="bg-t-o b-r-10">
              <section className="d-flex align-items-center justify-content-between p-3">
                <span>اطلاعات دسترسی BSS</span>
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
                    <option defaultValue="15">15</option>
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
              <section className="p-2 table-ad-pricing">
                <table>
                  <thead>
                    <tr>
                      <th>نام بخش</th>
                      <th>اختیار</th>
                      <th>تصویر بخش</th>
                      <th>کاربرد</th>
                      <th>نام دسترسی</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>مدیریت سرویس</td>
                      <td>api/proudct/byid</td>
                      <td>
                        <img
                          alt="Profile"
                          src="/Assets/Images/Project/data.jpg"
                        />
                      </td>
                      <td>ایجاد تغییرات در سرویس</td>
                      <td>ایجاد سرویس</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>مدیریت سرویس</td>
                      <td>api/proudct/byid</td>
                      <td>
                        <img
                          alt="Profile"
                          src="/Assets/Images/Project/data.jpg"
                        />
                      </td>
                      <td>ایجاد تغییرات در سرویس</td>
                      <td>ایجاد سرویس</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>مدیریت سرویس</td>
                      <td>api/proudct/byid</td>
                      <td>
                        <img
                          alt="Profile"
                          src="/Assets/Images/Project/data.jpg"
                        />
                      </td>
                      <td>ایجاد تغییرات در سرویس</td>
                      <td>ایجاد سرویس</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>مدیریت سرویس</td>
                      <td>api/proudct/byid</td>
                      <td>
                        <img
                          alt="Profile"
                          src="/Assets/Images/Project/data.jpg"
                        />
                      </td>
                      <td>ایجاد تغییرات در سرویس</td>
                      <td>ایجاد سرویس</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>مدیریت سرویس</td>
                      <td>api/proudct/byid</td>
                      <td>
                        <img
                          alt="Profile"
                          src="/Assets/Images/Project/data.jpg"
                        />
                      </td>
                      <td>ایجاد تغییرات در سرویس</td>
                      <td>ایجاد سرویس</td>
                    </tr>
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
                  <button className="input-buttons">بعدی</button>
                </section>

                <section className="col-xl-6 d-flex align-items-center justify-content-end">
                  <span>نمایش 1 تا 3 از 3 ورودی</span>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default DataAccess;

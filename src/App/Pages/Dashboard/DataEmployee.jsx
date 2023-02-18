import React from 'react';
import { Search } from '@mui/icons-material';

function DataEmployee() {
  return (
    <section className="p-3">
      <section className="row">
        <section className="row d-flex align-items-center justify-content-center">
          <section className="col-xl-12 p-2">
            <section className="bg-t-o b-r-10">
              <section className="d-flex align-items-center justify-content-between p-3">
                <span>اطلاعات حساب کارمندان BSS</span>
              </section>

              <section className="row d-flex align-items-center justify-content-between p-3">
                <section className="col-xl-6 d-flex align-items-center justify-content-start">
                  <span>نشان دادن</span>

                  <select
                    className="input-forms p-1 m-2 cursor-pointer"
                    name="number-of-items"
                  >
                    <option defaultValue="5">5</option>
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
              <section className="p-2 table-all-expert-lades">
                <table>
                  <thead>
                    <tr>
                      <th>ایدی</th>
                      <th>سمت کارشناس</th>
                      <th>نقش سیستمی</th>
                      <th>پیمانکاری </th>
                      <th>صف</th>
                      <th>نقش های پایه</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <span>کارشناس لایه اول پشتیبانی</span>
                      </td>
                      <td className="d-flex flex-column">
                        <span>
                          <span>راهبر سیستم </span>
                        </span>
                        <span>
                          <span>راهبر سیستم </span>
                        </span>
                        <span>
                          <span>راهبر سیستم </span>
                        </span>
                        <span>
                          <span>راهبر سیستم </span>
                        </span>
                        <span>
                          <span>راهبر سیستم </span>
                        </span>
                      </td>

                      <td>ندارد</td>
                      <td>
                        <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                          ندارد
                        </span>
                      </td>
                      <td>
                        <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                          کاربر سیستم کاربران فرایند
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <span>کارشناس RAN</span>
                      </td>
                      <td className="d-flex flex-column">
                        <span>
                          <span>کاربران فنی</span>
                        </span>
                        <span>
                          <span>راهبر سیستم </span>
                        </span>
                        <span>
                          <span>راهبر سیستم </span>
                        </span>
                        <span>
                          <span>راهبر سیستم </span>
                        </span>
                        <span>
                          <span>راهبر سیستم </span>
                        </span>
                      </td>

                      <td>تورنادو</td>
                      <td>
                        <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                          340
                        </span>
                      </td>
                      <td>
                        <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                          کاربر خارجی سیستم
                        </span>
                      </td>
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

export default DataEmployee;

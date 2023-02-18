import React from 'react';

function CreateIssues() {
  return (
    <section className="p-3">
      <section className="row">
        <section className="row d-flex align-items-center justify-content-center">
          <section className="col-xl-12 p-2">
            <form method="POST" encType="multipart/form-data">
              <section className="bg-t-o b-r-10">
                <section className="col-xl-12 p-3">
                  <span>صفحه جدیدی را برای مشکل اضافه کنید</span>
                </section>

                <section className="col-xl-12 p-3">
                  <input
                    type="text"
                    className="input-content-users p-2"
                    placeholder="عنوان مشکل"
                    name="BannerTitle"
                    required={true}
                  />
                </section>

                <section className="col-xl-12 p-3">
                  <input
                    type="text"
                    className="input-content-users p-2"
                    placeholder="شناسه مرتبط (شماره فرآیند ، شماره مشتری ، شماره سیم کارت )"
                    name="BannerSubTitle"
                    required={true}
                  />
                </section>

                <section className="col-xl-12 p-3">
                  <input
                    type="text"
                    className="input-content-users p-2"
                    placeholder="تاریخ و روز ثبت مشکل"
                    name="DownloadLink"
                    required={true}
                  />
                </section>

                <section className="col-xl-12 p-3">
                  <input
                    className="input-content-users p-2"
                    required={true}
                    type="file"
                    name="EbookPreviewImage"
                  />
                </section>
              </section>

              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3">
                  <span>توضیحات</span>
                </section>

                <section className="col-12 p-3">
                  <textarea
                    type="text"
                    className="input-content-users p-2"
                    placeholder="درخصوص این مشکل توضیحات را کامل بنویسید"
                    name="GoogleSchema"
                    required={true}
                  />
                </section>
              </section>

              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3">
                  <span>اطلاعات تکمیلی</span>
                </section>

                <section className="row d-flex col-12 p-3">
                  <span className="col-xl-2">راه ارتباطی</span>

                  <section className="col-xl-2">
                    <select className="input-content-users p-10" name="Status">
                      <option value="person1">-</option>
                      <option value="Public">پیام رسان بله</option>
                      <option value="Draft">ایمیل</option>
                      <option value="Public">تلفن</option>
                      <option value="Draft">تیکت های SR</option>
                      <option value="Public">What'sUp</option>
                      <option value="Draft">دیگر</option>
                    </select>
                  </section>
                </section>

                <section className="row d-flex col-12 p-3">
                  <span className="col-xl-2">نام ایجاد کننده</span>

                  <section className="col-xl-2">
                    <select
                      className="input-content-users p-10"
                      name="Visibility"
                    >
                      <option value="person1">-</option>
                      <option value="person1">سعید بطحایی</option>
                      <option value="person2">حمیدرضا رفیعی</option>
                      <option value="person3">ستاره احمدی</option>
                    </select>
                  </section>
                </section>

                <section className="row d-flex col-12 p-3">
                  <span className="col-xl-2">واحد درخواست کننده</span>

                  <section className="col-xl-2">
                    <select
                      className="input-content-users p-10"
                      name="Visibility"
                    >
                      <option value="person1">-</option>
                      <option value="person1">تیم فروش</option>
                      <option value="person2">تیم RAN</option>
                      <option value="person3">تیم هماهنگ کننده نصب</option>
                    </select>
                  </section>
                </section>

                <section className="col-12 p-3">
                  <input
                    type="submit"
                    className="input-content-users p-2"
                    name="SaveChange"
                    value="ثبت"
                  />
                </section>
              </section>
            </form>
          </section>
        </section>
      </section>
    </section>
  );
}

export default CreateIssues;

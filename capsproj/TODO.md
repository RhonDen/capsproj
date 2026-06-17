# TODO

- [x] Fix booking phone validation issues
  - [x] Strip phone number formatting before calling `POST /api/bookings/request-otp` and `verify-otp`
  - [x] Ensure backend receives only `09XXXXXXXXX` digits

- [x] Fix time slot availability for today
  - [x] In `GET /api/bookings/availability`, if requested date is today, remove slots earlier than current time
  - [x] Return only future start times

- [x] Simplify `/booking` landing page
  - [x] Remove guides/steps and show only “Book Appointment” + “Check History” buttons with icons

- [ ] MySQL migration functional verification (backend + frontend)
  - [ ] Ensure sequelize is using MySQL when `DB_DIALECT=mysql` (and not silently falling back)
  - [ ] Run server startup against MySQL + confirm tables sync/migrations
  - [ ] Verify OTP booking flow end-to-end
  - [ ] Verify admin login + status updates
  - [ ] Verify blocked dates + walk-in flow
  - [ ] Verify contact form endpoints


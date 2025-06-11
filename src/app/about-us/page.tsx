export default function Page() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-right">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Phone</label>
              <input type="phone" className="input" placeholder="Phone" />
              <label className="label">Message</label>
              <textarea
                placeholder="write a message to us"
                className="textarea textarea-md"></textarea>
              <button className="btn btn-neutral mt-4">Send</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

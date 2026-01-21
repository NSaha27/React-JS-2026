function AddTodoForm() {
  return (
    <div className="w-50 mx-auto">
      <div className="mb-3 py-1">
        <h2 className="h2 text-center">Add Todo Form</h2>
      </div>
      <form action="" method="post" className="">
        <div className="mb-3">
          <label htmlFor="todoDate" className="form-label">
            Date
          </label>
          <input
            type="date"
            name="todoDate"
            id="todoDate"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="todoTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="todoTitle"
            id="todoTitle"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="todoDescription" className="form-label">
            Description
          </label>
          <textarea
            name="todoDescription"
            id="todoDescription"
            className="form-control"
            rows={8}
          ></textarea>
        </div>
        <div className="mt-1 row">
          <button type="submit" className="col-12 col-md-6 purple">
            Add
          </button>
          <button type="reset" className="col-12 col-md-6 purple">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodoForm;

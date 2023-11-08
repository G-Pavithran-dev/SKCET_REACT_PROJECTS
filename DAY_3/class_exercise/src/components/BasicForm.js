function Form(){
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.feedback.value);
    }
    return (
        <>
            <h1>Form App : </h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <label>Name : </label>
                <input type="text" id="name" placeholder="Enter your name" />
                <hr />
                <label>Email : </label>
                <input type="email" id="email" placeholder="Enter your email" />
                <hr />
                <label>FeedBack : </label>
                <textarea id="feedback" placeholder="Enter your feedback" rows={5} cols={15} />
                <hr />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Form;
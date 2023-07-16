import useTitle from './Home/Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div >
            <h1 className="mb-5 text-5xl font-bold text-center mt-20">Blog Page</h1>

            <div className='md:w-[2/3] my-10 px-5 lg:px-24'>
                {/* question 01 */}
                <div className="chat mt-5 chat-start">
                    <div className="chat-bubble text-white text-black">What is an access token and refresh token? How do they work and where should we store them on the client-side?</div>
                </div>
                <div className="chat mt-5 chat-end">
                    <div className="chat-bubble chat-bubble-primary">Access Token: A credential used to authenticate and authorize a client's access to protected resources. Stored in HTTP-only cookie or local storage.
                    </div>
                </div>
                <div className="chat mt-5 chat-end">
                    <div className="chat-bubble chat-bubble-primary">Refresh Token: A long-lived token used to obtain a new access token without re-authentication. Stored securely, preferably in an HTTP-only cookie or server-side session store.
                    </div>
                </div>
                {/* question 02 */}
                <div className="chat mt-5 chat-start">
                    <div className="chat-bubble text-white text-black">Compare SQL and NoSQL databases?</div>
                </div>
                <div className="chat mt-5 chat-end">
                    <div className="chat-bubble chat-bubble-primary">SQL: Relational databases with predefined schemas. Support structured data, SQL queries, and ACID transactions (MySQL, PostgreSQL).<br />
                        NoSQL: Non-relational databases with flexible schemas. Handle unstructured data, high scalability, sacrifice some data consistency (MongoDB, Cassandra).
                    </div>
                </div>
                {/* question 03 */}
                <div className="chat mt-5 chat-start">
                    <div className="chat-bubble text-white text-black">What is express js? What is Nest JS?</div>
                </div>
                <div className="chat mt-5 chat-end">
                    <div className="chat-bubble chat-bubble-primary">
                        Express.js:
                        Web application framework for Node.js. Simplifies handling HTTP requests, routing, middleware integration, and view rendering.<br />
                        Nest.js:
                        Progressive web application framework built on Express.js. Offers structured and scalable architecture, leveraging decorators, modules, and dependency injection.
                    </div>
                </div>
                {/* question 04 */}
                <div className="chat mt-5 chat-start">
                    <div className="chat-bubble text-white text-black">What is MongoDB aggregate and how does it work ?</div>
                </div>
                <div className="chat mt-5 chat-end">
                    <div className="chat-bubble chat-bubble-primary">
                        Powerful framework for data aggregation in MongoDB. Performs data transformation using stages like filtering, grouping, sorting, projecting. Enables complex data manipulation and meaningful results.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
function Modal({ show, onClose }) {
    if (!show) return null;

    return (
        <div style={{
            position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
            alignItems: "center", justifyContent: "center"
        }}>
            <div style={{
                background: "#fff", padding: "20px", borderRadius: "5px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
            }}>
                <h2>Modal Title</h2>
                <p>This is a simple React modal.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

function App() {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>React Modal Example</h1>
            <button onClick={() => setShowModal(true)}>Open Modal</button>
            <Modal show={showModal} onClose={() => setShowModal(false)} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

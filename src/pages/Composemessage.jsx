function Composemessage() {
  const [message, setMessage] = useState({
    to: '',
    body: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage((prevMessage) => ({
      ...prevMessage,
      [name]: value,
    }));
  };

  const handleSend = () => {
    // Handle sending message (API call or logic)
    alert(`Message sent to ${message.to}: ${message.body}`);
    setMessage({ to: '', body: '' });
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Compose</h2>
      <input
        type="text"
        name="to"
        value={message.to}
        onChange={handleChange}
        placeholder="To"
        className="w-full mb-4 p-2 border rounded-lg"
      />
      <textarea
        name="body"
        value={message.body}
        onChange={handleChange}
        placeholder="New Message"
        className="w-full mb-4 p-2 border rounded-lg"
      />
      <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Send
      </button>
    </div>
  );
}

export default Composemessage;

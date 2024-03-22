const Create = () => {
  return (
    <><ul className="steps">
      <li className="step step-primary">Register</li>
      <li className="step step-primary">Upload Journal</li>
      <li className="step">Processing</li>
      <li className="step">Download Journal</li>
    </ul>
    <div>
        <input type="file" className="file-input w-full max-w-xs" />
    </div></>
  )
}

export default Create
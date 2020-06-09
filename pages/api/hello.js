// req = request data, res = response data
export default (req, res) => {
    res.status(200).json({ text: 'Hello' })
    
    const email = req.body.email
    // then save it to your database, etc...
}
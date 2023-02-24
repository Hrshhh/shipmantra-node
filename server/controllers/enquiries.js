import b2b_enquiries from "../models/enquiries";

export const findAllUsers = async (req, res) => {
    console.log(req.body);
    // For finding all documents in user
    try {
        await b2b_enquiries.find({}).limit(10).then(users => {
                if (!users) {
                    return res.status(404).json({
                        success: false,
                        message: 'Users not found'
                    })
                } else {
                    console.log(users)
                    return res.status(200).json({
                        success: true,
                        data: users
                    })
                }
            })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: 'Error occured in finding all documents ' + err
        })
    }
}

export const findWithContactName = async (req, res) => {
    // For finding all documents with specific contact Name
    try{
        await b2b_enquiries.find({contactName: req.params.contactName}).then(users => {
            if(!users){
                return res.status(404).json({
                    success: false,
                    message: "User not found"
                })
            }else{
                console.log(users);
                res.send(200).json({
                    success: true,
                    data: users
                })
            }
        }) 
    }catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Error occured in finding a document by Contact Name " + err
        })
    }
}

export const findWithWebsiteName = async (req, res) => {
    //For finding a document with specific Website Name
    try{
        await b2b_enquiries.findOne({websiteName: req.params.websiteName}).then((response) => {
            if(!response){
                return res.status(404).send("Website Name not found")
            }else {
                console.log(response);
                res.send(200).json({
                    success: true,
                    data: response
                })
            }
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error occured in finding a document by Website Name "+ err
        })
    }
}

export const updateUsingWebsiteName = async (req, res) => {
    // Update a document by its Website Name
    try{
        await b2b_enquiries.updateOne({websiteName: "abc.com"}, { $set: {phoneNumber: 8734787426}}).then((response) => {
            console.log(response);
            res.send(200).json({
                success: true,
                data: response
            })
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error occured in updating document "+ err
        })
    }
}

export const deleteUsingID = async (req, res) => {
    // For Deleting document of specific id
    try{
        const afterDeletion = await b2b_enquiries.queries.deleteOne({_id: isObjectId("9834945983408")});
        console.log(afterDeletion);
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Error occured while deleting " + err
        })
    }
}

export const savingQueriesInDatabase = async (req, res) => {
    //For saving user object into b2b_enquiries
    const user = new b2b_enquiries(req.body);
    console.log("User created ", user);
    try{
        user.save().then((result) => {
            console.log(result);
        })
    }
    catch(err){
        console.log(err);
        res.status(500).send("Error occured while saving the data");
    }
    

}

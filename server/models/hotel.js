import mongoose from 'mongoose';

const {Schema} = mongoose;
const {ObjectId} = mongoose.Schema;


const hotelSchema = new Schema({
    title:{
        type:String,
        required:'Title is required'
    },
    content:{
        type:String,
        required:'Content is required',
        maxlength:10000
    },
    location:{
        type:String,
        required:'Title is required'
    },
    price:{
        type:Number,
        required:'Price is required',
        trim:true
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    },
    image:{
        data:Buffer,
        contentType:String        
    },
    from:{
        type:Date,
        required:'From is required'
    },
    to:{
        type:Date,
        required:'To is required'
    },
    bed:{
        type:Number,
        required:'Bed is required'
    }
},{
    timestamps:true
})


export default mongoose.model('Hotel', hotelSchema);
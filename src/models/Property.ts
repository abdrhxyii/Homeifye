import mongoose, { Schema, Document } from 'mongoose';

interface IProperty extends Document {
  title: string;
  description: string;
  price: number;
  location: string;
  propertyType: string; 
  bedrooms: number;
  bathrooms: number;
  area: number; 
  amenities: string[]; 
  images: string[]; 
  listingType: string; 
  createdAt: Date;
  updatedAt: Date;
}

const propertySchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    propertyType: {
        type: String,
        enum: [
            'apartment', 'house', 'condo', 'land', 'studio', 'villa', 'townhouse', 
            'penthouse', 'duplex', 'bungalow', 'cottage', 'mansion', 'farmhouse', 
            'chalet', 'loft', 'mobile home', 'co-op', 'commercial', 'industrial', 
            'mixed-use', 'ranch'
        ], 
        required: true,
    },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    area: { type: Number, required: true }, // square footage
    amenities: { type: [String], required: true },
    images: { type: [String], default: [] }, // Store URLs of property images
    listingType: {
      type: String,
      enum: ['sale', 'rental', 'other'], // Define the possible values
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

const Property = mongoose.models.Property || mongoose.model<IProperty>('Property', propertySchema);

export default Property;

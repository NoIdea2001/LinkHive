import mongoose, { Schema, HydratedDocument } from "mongoose";

// Interface to define the document structure
export interface IUrl  {
  originalUrl: string;
  shortUrl?: string;
  urlCode: string;
  createdAt?: Date;
  expiresAt?: Date;
  clicks?: number;
  clickDetails: {
    ip?: string;
    timestamp?: Date;
    userAgent?: string;
    referer?: string;
  }[];
}

// Create the schema
const UrlSchema = new Schema<IUrl>({
  originalUrl: {
    type: String,
    required: true,
  },
  urlCode: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    default: function () {
      const date = new Date();
      date.setDate(date.getDate() + 30);
      return date;
    },
  },
  clicks: {
    type: Number,
    default: 0,
  },
  clickDetails: [
    {
      ip: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
      userAgent: String,
      referer: String,
    },
  ],
});

UrlSchema.pre("save", function (this: HydratedDocument<IUrl>, next) {
  if (!this.shortUrl) {
    this.shortUrl = "https://linkhive.live/" + this.urlCode;
  }
  next();
});


// Add indices for better query performance

// Create and export the model
const Url = mongoose.models.Url || mongoose.model<IUrl>("Url", UrlSchema);

export default Url;

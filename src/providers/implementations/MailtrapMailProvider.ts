import { IMailProvider, IMessage } from './../IMailProvider';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
require('dotenv').config();

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail;

  constructor(){
    this.transporter = nodemailer.createTransport({
      host: process.env.HOST_EMAIL,
      port: parseInt(process.env.PORT_EMAIL),
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASSWORD_EMAIL
      }
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body
    })
  }
}
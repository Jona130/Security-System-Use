import smtplib

server = smtplib.SMTP('smtp.world4you.com', 25)

server.ehlo()

with open('password.txt', 'r') as f:
  password = f.read()

server.login('')
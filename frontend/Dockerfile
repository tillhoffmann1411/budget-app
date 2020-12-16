# base image
FROM node:alpine


ADD ./scripts/startup.sh /
RUN ["chmod", "+x", "./startup.sh"]
ENTRYPOINT ["sh", "/startup.sh"]

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# start app
CMD npm run dev
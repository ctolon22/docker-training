FROM ubuntu

RUN apt-get update
RUN apt-get install -y figlet
RUN apt-get install -y lolcat

ENTRYPOINT ["figlet", "-f", "script"]
CMD ["Hello World"]
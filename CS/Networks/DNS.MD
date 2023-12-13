12/11/2023
Objectives: 
1. Do some research and get understanding around TLS, SSL, DNS, CNAME, etc


Purpose: To move away from a surface level of renewing certs before they expire. Their significance, etc.

***DNS also known as Domain Name Service. Is a registry that maps human-friendly domain names to machine-friendly
IP addresses. It can do other things like failover or caching. When we type a url into the browser, DNSlooks for the associated
ip address in a process called DNS resolution

***SSL or Secure Socket Layer is a certificate that contains both a public and information about the entity that owns the certificate. It's purpose is to encrypt the connection between a client and a server. SSL certificates are secured by a CA or Certificate Authority
who can verify the owner of the certificate.

CNAME or canonical name is a kind of dns record that maps an alias name to a true or canonical name, which can in return connect to an A name that maps to the IP address of the root domain. Why is CNAME important? Well let's say you have several services, serving on different ports in you server. That server has only one ip address right? How would you talk to specific services if you're just pointing
to the root domain (which will map to the Ip of your server), well aliases allow you to distinguish specific entities via 
dns names: example mail, FTP, etc.r These are subdomains. 

Process as I understood it for DNS resolution
I'll break it into 5 steps:
1. DNS request sent from client to DNS server
2. DNS resolver finds Authoritative Name Server, which finds zonal location of relevant records.
3. CNAME returned to client by resolver, browser understands that response carries cname, so
4. Sends another DNS query for the A name and the IP is returned. 
5. Once resolver has sent IP, Client makes a request using IP address.



12/12/2023
Objective:
1. Understand how to make an api public accessible and how it hosted. It's relationship to the above list. 
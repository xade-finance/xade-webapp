from http.server import BaseHTTPRequestHandler, HTTPServer
from json import loads
from pymongo import MongoClient

client = MongoClient("mongodb://username:pass@localhost:27017/")
database = client["xade"]
collection = database["users"]
ips = database["ips"]

class S(BaseHTTPRequestHandler):
    def _set_response(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    def do_POST(self):
        content_length = int(self.headers['Content-Length']) 
        post_data = self.rfile.read(content_length) 
        data = post_data.decode('utf-8')
        if data.startswith("IP: "):
            i = open("/opt/xade-main/src/api/ips.log",'r')
            ip = open("/opt/xade-main/src/api/ips.log",'a')
            data = data.replace("IP: ","")
            if data not in i.readlines():
                ips.insert_one({"ip":data})
                ip.write(data+"\n")
            ip.close()
            i.close()

        else:
            
            j = data.replace("'", "\"")
            d = loads(j)

            email = d["email"]
            name = d["name"]
            pfp = d["profileImage"]
            verify = d["verifier"]
            i = d["verifierId"]
            login = d["typeOfLogin"]
    
            info2 = f"Email: {email}\n"
            info3 = f"Email: {email} Login Type: {login}\n"
    
    
            fa = open('/opt/xade-main/src/api/emails.log','a')
            fr = open('/opt/xade-main/src/api/emails.log','r').readlines()
            fa2 = open('/opt/xade-main/src/api/logins.log','a')
            fr2 = open('/opt/xade-main/src/api/logins.log','r').readlines()
    
            if info2 not in fr:
                fa.write(info2)
                fa2.write(info3)
                fa.close()
    
    
                info = {
                    "Email":email,
                    "Username":name,
                    "Profile Picture URL":pfp,
                    "Verifier":verify,
                    "Verifier ID":i,
                    "Login Type":login,
                    "Primary Login":'Yes'
                }
    
                x = collection.insert_one(info)
            elif info3 not in fr2:
                    fa2.write(info3)
                    fa2.close()
    
                    info = {
                        "Email":email,
                        "Username":name,
                        "Profile Picture URL":pfp,
                        "Login Type":login,
                        "Primary Login":'No'
                    }
    
                    x = collection.insert_one(info)
            else:
                info = "duplicate lol"

        #print(info)
        self._set_response()    
        self.wfile.write("{}".format(self.path).encode('utf-8'))

def run(server_class=HTTPServer, handler_class=S, port=8000):
    # logging.basicConfig(level=logging.INFO)
    server_address = ('0.0.0.0', 8000)
    httpd = server_class(server_address, handler_class)
    print(f"Listening on 127.0.0.1:{port}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass

if __name__ == '__main__':
    run()

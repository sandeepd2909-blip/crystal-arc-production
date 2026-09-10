"""Static server matching Netlify for a Next `output: export` build.

Next writes both `out/en.html` and an `out/en/` directory. SimpleHTTPRequestHandler
resolves the directory first and 301s to `/en/`, which has no index. Netlify serves
the .html, so the path is rewritten before the base class ever sees it.
"""
import http.server, socketserver, os
from socketserver import ThreadingMixIn

os.chdir("out")
ROOT = os.getcwd()

class H(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass

    def do_GET(self):
        self._rewrite()
        return super().do_GET()

    def do_HEAD(self):
        self._rewrite()
        return super().do_HEAD()

    def _rewrite(self):
        path = self.path.split("?")[0].split("#")[0]
        rel = path.lstrip("/")
        cand = os.path.join(ROOT, rel.replace("/", os.sep) + ".html")
        if rel and os.path.isfile(cand):
            self.path = "/" + rel + ".html"

class S(ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True
    daemon_threads = True

S(("127.0.0.1", 3111), H).serve_forever()

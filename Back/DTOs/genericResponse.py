class GenericResponse():
    ok: bool = False
    id: int | None = None
    def __init__(self, ok: bool, id: int):
        self.ok = ok
        self.id = id
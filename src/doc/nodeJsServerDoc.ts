/**
 * 
 * Idempotency
Definition:
“A request is said to be idempotent when making multiple requests to the API that are identical produce the same result.”
Idempotency and API Methods:
The only method not considered idempotent is POST.
POST adds a new resource each time; on the other hand, GET, DELETE, PATCH, and PUT act on the same resource each time with the same result.
Idempotency and Security
Get:
Safe because the database doesn’t change
Endpoint is stored in session history
Can be cached
Often logged
Post:
Endpoint not stored in session history
Protects user data from being inadvertently exposed


 * 
 */
using AutoMapper;
using Domain;
using MediatR;
using Persistence;


namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class MyCustomResult
        {
            public bool Success { get; set; }
            public string Message { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper; 
                _context = context;
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                // This is the activity in our databse
                var activity = await _context.Activities.FindAsync(request.Activity.Id);
                
                // Update all properties of activity with the upcoming Activity of request
                _mapper.Map(request.Activity, activity);

                 await _context.SaveChangesAsync();
            }
        }
    }
}
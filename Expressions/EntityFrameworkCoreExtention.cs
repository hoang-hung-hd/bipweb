using System.Linq.Expressions;

namespace Microsoft.EntityFrameworkCore
{
    public abstract class PagedResultBase
    {
        public int CurrentPage { get; set; }
        public int PageCount { get; set; }
        public int PageSize { get; set; }
        public int Total { get; set; }

        //[JsonPropertyName("from")]
        //public int? From { get; set; }

        //[JsonPropertyName("to")]
        //public int? To { get; set; }

        public int LastPage { get; set; }


        //public int FirstRowOnPage
        //{

        //    get { return (CurrentPage - 1) * PageSize + 1; }
        //}

        //public int LastRowOnPage
        //{
        //    get { return Math.Min(CurrentPage * PageSize, RowCount); }
        //}
    }

    public class Queryable<T> : PagedResultBase where T : class
    {
        public IList<T> Items { get; set; }

        public Queryable()
        {
            Items = new List<T>();
        }
    }



    public static class IQueryableExtention
    {
        public static Queryable<T> GetPaged<T>(this IQueryable<T> query, int page, int pageSize) where T : class
        {
            var result = new Queryable<T>();
            result.CurrentPage = page;
            result.PageSize = pageSize;
            result.Total = query.Count();


            var pageCount = (double)result.Total / pageSize;
            result.PageCount = (int)Math.Ceiling(pageCount);

            var skip = (page - 1) * pageSize;
            result.Items = query.Skip(skip).Take(pageSize).ToList();

            return result;
        }

        public static async Task<Queryable<T>> GetPagedAsync<T>(this IQueryable<T> query, int page, int pageSize) where T : class
        {
            var result = new Queryable<T>();
            result.CurrentPage = page;
            result.PageSize = pageSize;
            result.Total = query.Count();


            var pageCount = (double)result.Total / pageSize;
            result.PageCount = (int)Math.Ceiling(pageCount);

            var skip = (page - 1) * pageSize;
            result.Items = await query.Skip(skip).Take(pageSize).ToListAsync();

            return result;
        }

        public static IOrderedQueryable<T> OrderBy<T>(this IQueryable<T> source, string propertyName, string typeName = "asc")
        {
            // LAMBDA: x => x.[PropertyName]
            var parameter = Expression.Parameter(typeof(T), "x");
            Expression property = Expression.Property(parameter, propertyName);
            var lambda = Expression.Lambda(property, parameter);

            // REFLECTION: source.OrderBy(x => x.Property)
            var orderByMethod = typeof(Queryable).GetMethods().First(x => x.Name == (typeName.ToUpper() == "ASC" ? "OrderBy" : "OrderByDescending") && x.GetParameters().Length == 2);
            var orderByGeneric = orderByMethod.MakeGenericMethod(typeof(T), property.Type);
            var result = orderByGeneric.Invoke(null, new object[] { source, lambda });

            return (IOrderedQueryable<T>)result;
        }
    }
}
